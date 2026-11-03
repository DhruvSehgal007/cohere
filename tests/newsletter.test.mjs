import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";

const loadDependency = createRequire(import.meta.url);

// Exercise the real routes and CAPTCHA verification with isolated database boundaries.
function load(file, dependencies = {}, globals = {}) {
  const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText;
  const exports = {};
  vm.runInNewContext(source, {
    exports, require: (name) => name in dependencies ? dependencies[name] : loadDependency(name),
    process: { env: { JWT_SECRET: "unit-test-secret", RECAPTCHA_SECRET_KEY: "unit-test-secret" } },
    console, AbortSignal, Buffer, URLSearchParams, ...globals,
  }, { filename: file });
  return exports;
}

const validation = load("utils/newsletter.ts");

test("runtime configuration exposes only the public key and never caches it", async () => {
  const env = { NEXT_PUBLIC_RECAPTCHA_SITE_KEY: " public-site-key ", RECAPTCHA_SECRET_KEY: "private-secret" };
  const route = load("app/api/newsletter/config/route.ts", {
    "next/server": { NextResponse: { json: (body, init) => new Response(JSON.stringify(body), init) } },
  }, { process: { env } });
  const response = await route.GET();
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.deepEqual(await response.json(), { siteKey: "public-site-key" });
  env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY = "updated-runtime-key";
  assert.deepEqual(await (await route.GET()).json(), { siteKey: "updated-runtime-key" });
});

test("runtime configuration fails closed when keys are missing", async () => {
  const route = load("app/api/newsletter/config/route.ts", {
    "next/server": { NextResponse: { json: (body, init) => new Response(JSON.stringify(body), init) } },
  }, { process: { env: {} } });
  assert.equal((await route.GET()).status, 503);
});

function setup(options = {}) {
  const calls = { writes: [], connections: 0, verifications: 0 };
  const usedTokens = new Set();
  const captcha = load("utils/modules/newsletterCaptcha.ts", {
    "@/utils/models/NewsletterRateLimit": { __esModule: true, default: { findOneAndUpdate: async () => ({ hits: options.hits || 1 }) } },
  });
  const routeGlobals = {
    ...(options.noSecret ? { process: { env: { JWT_SECRET: "unit-test-secret" } } } : {}),
    fetch: async (url, init) => {
      calls.verifications++;
      assert.equal(url, "https://www.google.com/recaptcha/api/siteverify");
      assert.equal(init.body.get("secret"), "unit-test-secret");
      if (options.offline) throw new Error("Service unavailable");
      const token = init.body.get("response");
      const success = options.valid !== false && !usedTokens.has(token);
      usedTokens.add(token);
      return { ok: true, json: async () => ({ success, hostname: options.hostname || "example.com" }) };
    },
  };
  const route = load("app/api/newsletter/route.ts", {
    "next/server": { NextResponse: { json: (body, init) => new Response(JSON.stringify(body), init) } },
    "@/utils/modules/auth": { verifyToken: async () => ({ role: options.role || "visitor" }) },
    "@/utils/modules/db": { connectDB: async () => { calls.connections++; } },
    "@/utils/newsletter": validation,
    "@/utils/modules/newsletterCaptcha": captcha,
    "@/utils/models/NewsletterSubscriber": { __esModule: true, default: {
      init: async () => {},
      updateOne: async (...args) => { calls.writes.push(args); if (options.duplicate) throw { code: 11000 }; },
      find: () => ({ sort: () => ({ skip: () => ({ limit: () => ({ lean: async () => [{ email: "person@example.com" }] }) }) }) }),
      countDocuments: async () => 1,
    } },
  }, routeGlobals);
  const request = (body) => ({
    headers: new Headers({ "x-forwarded-for": "192.0.2.1" }),
    json: async () => body,
    cookies: { get: () => options.authenticated ? { value: "session" } : undefined },
    nextUrl: new URL("https://example.com/api/newsletter"),
  });
  return { route, calls, request, captcha };
}

const validBody = { email: "person@example.com", captchaToken: "google-response-token" };

test("email validation accepts normalized addresses and rejects malformed input", () => {
  assert.equal(validation.normalizeNewsletterEmail("  Person+News@Example.COM "), "person+news@example.com");
  for (const email of [null, {}, "", "name", "a@localhost", "a..b@example.com", ".a@example.com", "a.@example.com", "a@-example.com", "a@example..com", "a b@example.com", "a@b.com@c.com", `${"a".repeat(65)}@example.com`]) {
    assert.equal(validation.normalizeNewsletterEmail(email), null, String(email));
  }
});

test("bad email and missing CAPTCHA never reach storage", async () => {
  const { route, calls, request } = setup();
  assert.equal((await route.POST(request({ email: "bad" }))).status, 400);
  assert.equal((await route.POST(request({ email: "a@example.com" }))).status, 400);
  assert.equal(calls.connections, 0);
  assert.equal(calls.verifications, 0);
});

test("failed Google verification never saves subscribers", async () => {
  const { route, calls, request } = setup({ valid: false });
  assert.equal((await route.POST(request(validBody))).status, 400);
  assert.equal(calls.writes.length, 0);
});

test("Google verification service failure fails closed", async () => {
  const { route, calls, request } = setup({ offline: true });
  assert.equal((await route.POST(request(validBody))).status, 503);
  assert.equal(calls.writes.length, 0);
});

test("successful signup stores a normalized address with an idempotent upsert", async () => {
  const { route, calls, request } = setup();
  assert.equal((await route.POST(request({ ...validBody, email: " Person@Example.com " }))).status, 200);
  assert.equal(calls.writes.length, 1);
  assert.equal(calls.writes[0][0].email, "person@example.com");
  assert.equal(calls.writes[0][1].$setOnInsert.email, "person@example.com");
  assert.equal(calls.writes[0][2].upsert, true);
});

test("concurrent duplicate insert returns a successful non-disclosing response", async () => {
  const { route, request } = setup({ duplicate: true });
  assert.equal((await route.POST(request(validBody))).status, 200);
});

test("rate limit rejects repeated attempts before CAPTCHA verification", async () => {
  const { route, calls, request } = setup({ hits: 11 });
  const response = await route.POST(request(validBody));
  assert.equal(response.status, 429);
  assert.ok(Number(response.headers.get("Retry-After")) > 0);
  assert.equal(calls.writes.length, 0);
  assert.equal(calls.verifications, 0);
});

test("used CAPTCHA cannot be replayed", async () => {
  const { route, calls, request } = setup();
  assert.equal((await route.POST(request(validBody))).status, 200);
  assert.equal((await route.POST(request(validBody))).status, 400);
  assert.equal(calls.writes.length, 1);
});

test("missing secret prevents signup without a verification bypass", async () => {
  const { route, calls, request } = setup({ noSecret: true });
  assert.equal((await route.POST(request(validBody))).status, 503);
  assert.equal(calls.writes.length, 0);
  assert.equal(calls.verifications, 0);
});

test("subscriber list is private and only admins can read it", async () => {
  for (const options of [{}, { authenticated: true }]) {
    const { route, calls, request } = setup(options);
    assert.equal((await route.GET(request())).status, 401);
    assert.equal(calls.connections, 0);
  }
  const { route, request } = setup({ authenticated: true, role: "admin" });
  const response = await route.GET(request());
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.equal((await response.json()).total, 1);
});
