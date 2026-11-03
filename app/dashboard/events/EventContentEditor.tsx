"use client";
import { useEffect, useRef, useState } from "react";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import {
  Bold,
  Italic,
  Link2,
  Unlink,
  List,
  ListOrdered,
  Undo2,
  Redo2,
} from "lucide-react";
import { normalizeEventHref, type EventContent } from "@/utils/eventContent";

export default function EventContentEditor({
  value,
  onChange,
  disabled,
}: {
  value: EventContent;
  onChange: (value: EventContent) => void;
  disabled: boolean;
}) {
  const [showLink, setShowLink] = useState(false);
  const [url, setUrl] = useState("");
  const [label, setLabel] = useState("");
  const [linkError, setLinkError] = useState("");
  const selection = useRef({ from: 1, to: 1 });
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: false,
        code: false,
        codeBlock: false,
        blockquote: false,
        horizontalRule: false,
        strike: false,
        underline: false,
        link: false,
      }),
      Link.configure({
        openOnClick: false,
        defaultProtocol: "https",
        HTMLAttributes: { class: "text-[#608383] underline hover:text-black" },
      }),
    ],
    content: value,
    editable: !disabled,
    editorProps: {
      attributes: {
        role: "textbox",
        "aria-label": "Event content",
        "aria-multiline": "true",
        "aria-required": "true",
        class:
          "min-h-[260px] p-4 leading-7 outline-none [&_p]:mb-4 [&_p:last-child]:mb-0 [&_strong]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:text-[#608383] [&_a:hover]:text-black",
      },
    },
    onUpdate: ({ editor }) => onChange(editor.getJSON()),
  });
  const state = useEditorState({
    editor,
    selector: ({ editor }) => ({
      bold: editor?.isActive("bold"),
      italic: editor?.isActive("italic"),
      bullet: editor?.isActive("bulletList"),
      ordered: editor?.isActive("orderedList"),
      link: editor?.isActive("link"),
      undo: editor?.can().undo(),
      redo: editor?.can().redo(),
    }),
  });
  useEffect(() => {
    editor?.setEditable(!disabled);
  }, [editor, disabled]);

  function openLink() {
    if (!editor) return;
    const { from, to } = editor.state.selection;
    selection.current = { from, to };
    setUrl(editor.getAttributes("link").href || "");
    setLabel(editor.state.doc.textBetween(from, to, " "));
    setLinkError("");
    setShowLink(true);
  }
  function applyLink() {
    if (!editor) return;
    const href = normalizeEventHref(url);
    if (!href) {
      setLinkError("Enter a valid website address or email address.");
      return;
    }
    if (!label.trim()) {
      setLinkError("Enter the text to display for this link.");
      return;
    }
    const marks = editor.state.doc
      .resolve(selection.current.from)
      .marks()
      .filter((mark) => mark.type.name !== "link")
      .map((mark) => mark.toJSON());
    editor
      .chain()
      .focus()
      .setTextSelection(selection.current)
      .insertContent({
        type: "text",
        text: label.trim(),
        marks: [...marks, { type: "link", attrs: { href } }],
      })
      .run();
    setShowLink(false);
  }
  const toolbarButton =
    "flex h-9 w-9 items-center justify-center rounded-md text-[#0d1e1e] transition hover:bg-[#439897]/15 aria-pressed:bg-[#439897]/20 disabled:opacity-35";
  return (
    <div>
      <p id="event-content-label" className="mb-2 font-bold">
        Event content
      </p>
      <div
        className={`overflow-hidden rounded-lg border border-[#439897]/30 bg-white focus-within:ring-2 focus-within:ring-[#439897]/15 ${disabled ? "opacity-60" : ""}`}
      >
        <div
          role="group"
          aria-label="Text formatting"
          className="flex flex-wrap gap-1 border-b border-[#439897]/20 bg-[#f7f9f8] p-2"
          onMouseDown={(event) => event.preventDefault()}
        >
          <button
            type="button"
            title="Bold (Ctrl+B)"
            aria-label="Bold"
            aria-pressed={!!state?.bold}
            disabled={disabled || !editor}
            className={toolbarButton}
            onClick={() => editor?.chain().focus().toggleBold().run()}
          >
            <Bold size={18} />
          </button>
          <button
            type="button"
            title="Italic (Ctrl+I)"
            aria-label="Italic"
            aria-pressed={!!state?.italic}
            disabled={disabled || !editor}
            className={toolbarButton}
            onClick={() => editor?.chain().focus().toggleItalic().run()}
          >
            <Italic size={18} />
          </button>
          <button
            type="button"
            title="Bullet list"
            aria-label="Bullet list"
            aria-pressed={!!state?.bullet}
            disabled={disabled || !editor}
            className={toolbarButton}
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
          >
            <List size={18} />
          </button>
          <button
            type="button"
            title="Numbered list"
            aria-label="Numbered list"
            aria-pressed={!!state?.ordered}
            disabled={disabled || !editor}
            className={toolbarButton}
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          >
            <ListOrdered size={18} />
          </button>
          <span className="mx-1 border-l border-[#439897]/25" />
          <button
            type="button"
            title="Add or edit link"
            aria-label="Add or edit link"
            aria-pressed={!!state?.link}
            disabled={disabled || !editor}
            className={toolbarButton}
            onClick={openLink}
          >
            <Link2 size={18} />
          </button>
          <button
            type="button"
            title="Remove link"
            aria-label="Remove link"
            disabled={disabled || !state?.link}
            className={toolbarButton}
            onClick={() =>
              editor?.chain().focus().extendMarkRange("link").unsetLink().run()
            }
          >
            <Unlink size={18} />
          </button>
          <span className="mx-1 border-l border-[#439897]/25" />
          <button
            type="button"
            title="Undo"
            aria-label="Undo"
            disabled={disabled || !state?.undo}
            className={toolbarButton}
            onClick={() => editor?.chain().focus().undo().run()}
          >
            <Undo2 size={18} />
          </button>
          <button
            type="button"
            title="Redo"
            aria-label="Redo"
            disabled={disabled || !state?.redo}
            className={toolbarButton}
            onClick={() => editor?.chain().focus().redo().run()}
          >
            <Redo2 size={18} />
          </button>
        </div>
        {showLink && (
          <div
            className="space-y-3 border-b border-[#439897]/20 bg-[#f7f9f8] p-4"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                applyLink();
              }
              if (event.key === "Escape") {
                event.preventDefault();
                event.stopPropagation();
                setShowLink(false);
                editor?.commands.focus();
              }
            }}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="text-sm">
                Link text
                <input
                  autoFocus
                  disabled={disabled}
                  className="mt-1 w-full rounded-lg border border-[#439897]/30 bg-white p-2"
                  value={label}
                  onChange={(event) => setLabel(event.target.value)}
                />
              </label>
              <label className="text-sm">
                Website or email address
                <input
                  disabled={disabled}
                  className="mt-1 w-full rounded-lg border border-[#439897]/30 bg-white p-2"
                  placeholder="https://example.com or name@example.com"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                />
              </label>
            </div>
            {linkError && (
              <p role="alert" className="text-sm text-red-600">
                {linkError}
              </p>
            )}
            <div className="flex gap-3">
              <button
                type="button"
                disabled={disabled}
                className="rounded-lg bg-[#439897] px-4 py-2 text-sm text-white"
                onClick={applyLink}
              >
                Apply link
              </button>
              <button
                type="button"
                disabled={disabled}
                onClick={() => {
                  setShowLink(false);
                  editor?.commands.focus();
                }}
                className="px-3 text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        <EditorContent editor={editor} aria-labelledby="event-content-label" />
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Write all event details here. Select text to make it bold or add a link.
        Press Enter for a new paragraph. Email addresses are clickable on the
        website.
      </p>
    </div>
  );
}
