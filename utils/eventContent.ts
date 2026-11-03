import type { JSONContent } from "@tiptap/react";
export type EventContent = JSONContent;

export function normalizeEventHref(value: string): string | null {
  const href = value.trim();
  if (!href || /[\s\u0000-\u001f\u007f]/.test(href)) return null;
  if (/^\/(?!\/)/.test(href) || /^#[a-z0-9_-]+$/i.test(href)) return href;
  if (/^[a-z0-9_%+'-]+(?:\.[a-z0-9_%+'-]+)*@(?:[a-z0-9-]+\.)+[a-z]{2,}$/i.test(href)) return `mailto:${encodeURIComponent(href).replace("%40", "@")}`;
  const candidate = /^[a-z0-9.-]+\.[a-z]{2,}(?:[/:?#]|$)/i.test(href) ? `https://${href}` : href;
  try {
    const url = new URL(candidate);
    return ["http:", "https:", "mailto:"].includes(url.protocol) ? url.href : null;
  } catch { return null; }
}

export function paragraphsToEventContent(paragraphs: string[]): EventContent {
  return { type: "doc", content: (paragraphs.length ? paragraphs : [""]).map(text => ({ type: "paragraph", content: text ? [{ type: "text", text }] : [] })) };
}

export function eventContentText(node: EventContent): string {
  if (node.type === "text") return node.text || "";
  if (node.type === "hardBreak") return "\n";
  return (node.content || []).map(eventContentText).join(["doc", "bulletList", "orderedList", "listItem"].includes(node.type || "") ? "\n" : "");
}

// Validate and rebuild the editor document rather than accepting arbitrary HTML.
export function normalizeEventContent(value: unknown): EventContent | null {
  let count = 0;
  let size = 0;
  function visit(value: unknown, depth: number, parent: string): EventContent {
    if (!value || typeof value !== "object" || depth > 12 || ++count > 5000) throw new Error("Invalid content");
    const node = value as Record<string, unknown>;
    const type = node.type;
    const allowed: Record<string, string[]> = { root: ["doc"], doc: ["paragraph", "bulletList", "orderedList"], paragraph: ["text", "hardBreak"], bulletList: ["listItem"], orderedList: ["listItem"], listItem: ["paragraph", "bulletList", "orderedList"] };
    if (typeof type !== "string" || !allowed[parent]?.includes(type)) throw new Error("Invalid node");
    if (type === "text") {
      if (typeof node.text !== "string" || !node.text || (size += node.text.length) > 200000) throw new Error("Invalid text");
      const result: EventContent = { type, text: node.text };
      if (node.marks !== undefined) {
        if (!Array.isArray(node.marks) || node.marks.length > 3) throw new Error("Invalid marks");
        result.marks = node.marks.map(mark => {
          if (!mark || typeof mark !== "object") throw new Error("Invalid mark");
          if (mark.type === "bold" || mark.type === "italic") return { type: mark.type };
          if (mark.type === "link" && typeof mark.attrs?.href === "string") {
            const href = normalizeEventHref(mark.attrs.href);
            if (href) return { type: "link", attrs: { href } };
          }
          throw new Error("Invalid link or formatting");
        });
      }
      return result;
    }
    if (type === "hardBreak") return { type };
    if (!Array.isArray(node.content) && node.content !== undefined) throw new Error("Invalid children");
    const result: EventContent = { type, content: ((node.content || []) as unknown[]).map(child => visit(child, depth + 1, type)) };
    if (type === "orderedList") {
      const attrs = node.attrs as Record<string, unknown> | undefined;
      const start = attrs?.start;
      if (typeof start === "number" && Number.isSafeInteger(start) && start > 0 && start < 100000) result.attrs = { start };
    }
    return result;
  }
  try {
    const document = visit(value, 0, "root");
    return eventContentText(document).trim() ? document : null;
  } catch { return null; }
}
