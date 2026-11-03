import type { ReactNode } from "react";
import EmailText from "./EmailText";
import { normalizeEventContent, normalizeEventHref, type EventContent as Content } from "@/utils/eventContent";

function renderNode(node: Content, key: number): ReactNode {
  if (node.type === "text") {
    const linked = node.marks?.some(mark => mark.type === "link");
    let result: ReactNode = linked ? node.text : <EmailText text={node.text || ""} />;
    for (const mark of node.marks || []) {
      if (mark.type === "bold") result = <strong className="font-bold">{result}</strong>;
      if (mark.type === "italic") result = <em>{result}</em>;
      if (mark.type === "link") {
        const href = normalizeEventHref(mark.attrs?.href || "");
        if (href) result = <a href={href} className="text-[#608383] underline underline-offset-2 transition-colors hover:text-black focus-visible:text-black">{result}</a>;
      }
    }
    return <span key={key}>{result}</span>;
  }
  const children = node.content?.map(renderNode);
  switch (node.type) {
    case "hardBreak": return <br key={key} />;
    case "paragraph": return <p key={key} className="min-h-[1em] whitespace-pre-line">{children}</p>;
    case "bulletList": return <ul key={key} className="list-disc space-y-2 pl-6">{children}</ul>;
    case "orderedList": return <ol key={key} start={node.attrs?.start} className="list-decimal space-y-2 pl-6">{children}</ol>;
    case "listItem": return <li key={key} className="space-y-2">{children}</li>;
    default: return children;
  }
}

export default function EventContent({ content, paragraphs }: { content?: Content; paragraphs: string[] }) {
  const document = content && normalizeEventContent(content);
  return document ? document.content?.map(renderNode) : paragraphs.map((paragraph, index) => <p key={index} className="whitespace-pre-line"><EmailText text={paragraph} /></p>);
}
