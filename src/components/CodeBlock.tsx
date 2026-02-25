import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  className?: string;
}

const CodeBlock = ({ code, className = "" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderLine = (line: string, i: number) => {
    if (line.startsWith("# ")) {
      return <span key={i} className="text-[hsl(var(--muted-foreground))] italic">{line}</span>;
    }
    if (line.startsWith("$ ")) {
      return (
        <span key={i}>
          <span className="text-[hsl(var(--terminal-green))] font-semibold">$ </span>
          <span className="text-[hsl(var(--terminal-cyan))]">{line.slice(2)}</span>
        </span>
      );
    }
    return <span key={i} className="text-[hsl(var(--foreground))] opacity-80">{line}</span>;
  };

  return (
    <div className={`code-block relative group ${className}`}>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 rounded bg-secondary/80 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm leading-relaxed">
          {code.split("\n").map((line, i) => (
            <span key={i}>
              {renderLine(line, i)}
              {"\n"}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
