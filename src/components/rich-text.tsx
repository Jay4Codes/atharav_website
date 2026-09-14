import type { ReactNode } from "react";

const TOKEN = /\*\*([^*]+)\*\*|\*([^*]+)\*|__([^_]+)__/g;

export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const pattern = new RegExp(TOKEN.source, "g");

  while ((match = pattern.exec(text))) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    if (match[1]) {
      parts.push(
        <strong key={match.index} className="mark">
          {match[1]}
        </strong>,
      );
    } else if (match[2]) {
      parts.push(
        <em key={match.index} className="em">
          {match[2]}
        </em>,
      );
    } else if (match[3]) {
      parts.push(
        <span key={match.index} className="hl">
          {match[3]}
        </span>,
      );
    }
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return <>{parts}</>;
}
