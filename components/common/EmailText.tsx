export default function EmailText({ text }: { text: string }) {
  // Keep punctuation outside links and support multiple addresses in a paragraph.
  const parts = text.split(/([a-z0-9_%+'-]+(?:\.[a-z0-9_%+'-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,})/gi);

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <a
        key={index}
        href={`mailto:${encodeURIComponent(part).replace("%40", "@")}`}
        className="text-[#608383] transition-colors hover:text-black focus-visible:text-black"
      >
        {part}
      </a>
    ) : part
  );
}
