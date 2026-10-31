# Newsletter signup: Google reCAPTCHA v2 checkbox

The homepage newsletter form uses Google's actual **I'm not a robot** checkbox. There is no letter-code input. Email addresses are validated, normalized, and saved once in MongoDB; admins can view them at `/dashboard/newsletter`.

## Activate reCAPTCHA

1. Register your website in the [Google reCAPTCHA admin console](https://www.google.com/recaptcha/admin/create).
2. Choose **reCAPTCHA v2 → I'm not a robot Checkbox** (classic SiteVerify-compatible keys, not v3 or invisible reCAPTCHA).
3. Add your production hostname and `localhost` for development.
4. Add the issued keys to `.env.local` and the hosting environment:

```dotenv
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-public-site-key
RECAPTCHA_SECRET_KEY=your-private-secret-key
# Optional additional server-side hostname check:
RECAPTCHA_ALLOWED_HOSTNAMES=localhost,yourdomain.com,www.yourdomain.com
```

Restart development or rebuild/redeploy production after changing the public key. Never commit the secret key. The existing `MONGO_URI` and `JWT_SECRET` are also required. Signup remains disabled until the public site key is supplied; the API refuses missing secrets, missing tokens, failed/expired tokens, and unavailable verification responses. Test keys must never be deployed to production.

Google may show an additional image challenge after clicking the checkbox; the application cannot guarantee a checkbox-only experience for every visitor. See [Google's widget documentation](https://developers.google.com/recaptcha/docs/display).

## Protection and verification

The server verifies every token with [Google SiteVerify](https://developers.google.com/recaptcha/docs/verify). Tokens expire after two minutes and are single-use. The widget resets after each submission and clears expired tokens. A honeypot, unique email index, and MongoDB-backed limit of ten signup attempts per IP per ten-minute window provide additional protection.

The deployment proxy must overwrite `x-forwarded-for`. Direct deployments without that header share a fallback bucket. Rate-limit records use keyed IP hashes and expire automatically. Previously generated letter-code challenges expire automatically; their old API route has been removed.

Email syntax validation does not confirm mailbox ownership; that requires confirmation emails.

Run `node --test tests/newsletter.test.mjs` for tests with mocked Google and MongoDB boundaries. After configuring actual keys, check successful checkbox submission, expired tokens, duplicate emails, error recovery, and the admin Newsletter mails page. Also confirm `/api/newsletter` rejects unauthenticated GET requests.
