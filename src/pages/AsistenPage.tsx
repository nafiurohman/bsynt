import { useState, useRef, useEffect } from "react";
import DocsLayout from "@/components/DocsLayout";
import { docsMap } from "./DocsPage";
import { Bot, Send, User, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { DocsPage, Command } from "@/types/docs";

interface Message {
  role: "user" | "bot";
  content: string;
}

function searchDocs(query: string): { cmd: Command; slug: string; pageTitle: string }[] {
  const q = query.toLowerCase();
  const results: { cmd: Command; slug: string; pageTitle: string; score: number }[] = [];

  Object.entries(docsMap).forEach(([slug, page]) => {
    page.commands.forEach((cmd) => {
      let score = 0;
      if (cmd.name.toLowerCase() === q) score += 10;
      if (cmd.name.toLowerCase().includes(q)) score += 5;
      if (cmd.title.toLowerCase().includes(q)) score += 4;
      if (cmd.description.toLowerCase().includes(q)) score += 3;
      if (cmd.syntax.toLowerCase().includes(q)) score += 2;
      if (cmd.examples.toLowerCase().includes(q)) score += 2;
      cmd.options.forEach((o) => {
        if (o.option.toLowerCase().includes(q) || o.description.toLowerCase().includes(q)) score += 1;
      });
      if (cmd.notes?.toLowerCase().includes(q)) score += 1;
      if (score > 0) {
        results.push({ cmd, slug, pageTitle: page.title, score });
      }
    });
  });

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 5);
}

function generateAnswer(query: string): string {
  const q = query.toLowerCase().trim();

  if (/^(hai|halo|hi|hello|hey)/.test(q)) {
    return "Halo! 👋 Saya asisten BSynt. Tanyakan tentang perintah terminal (Linux, Windows, macOS) atau syntax SQL (MySQL) — misalnya: \"cara menggunakan grep\", \"apa itu SELECT JOIN\", atau \"diskutil di macOS\".";
  }

  const keywords = q
    .replace(/^(apa itu|bagaimana|cara|gimana|jelaskan|contoh|gunakan|penggunaan|fungsi|kegunaan)\s*/g, "")
    .replace(/[?!.,]/g, "")
    .trim();

  if (!keywords) {
    return "Silakan tanyakan tentang perintah atau syntax tertentu. Contoh: \"apa itu ls\", \"cara menggunakan SELECT\", atau \"brew install\".";
  }

  let results = searchDocs(keywords);

  if (results.length === 0) {
    const words = keywords.split(/\s+/);
    for (const word of words) {
      if (word.length >= 2) {
        results = searchDocs(word);
        if (results.length > 0) break;
      }
    }
  }

  if (results.length === 0) {
    return `Maaf, saya tidak menemukan informasi tentang "${keywords}" di dokumentasi BSynt. Saya hanya bisa menjawab pertanyaan seputar syntax dan perintah yang ada di dokumentasi ini (Linux, Windows, macOS, MySQL).\n\nCoba tanyakan perintah spesifik seperti: ls, grep, SELECT, CREATE TABLE, brew, dll.`;
  }

  const top = results[0];
  const cmd = top.cmd;
  let answer = `**${cmd.title}** (\`${cmd.name}\`)\n\n`;
  answer += `${cmd.description}\n\n`;
  answer += `**Syntax:** \`${cmd.syntax}\`\n\n`;

  if (cmd.options.length > 0) {
    answer += `**Opsi umum:**\n`;
    cmd.options.slice(0, 5).forEach((o) => {
      answer += `• \`${o.option}\` — ${o.description}\n`;
    });
    answer += "\n";
  }

  if (cmd.examples) {
    const exLines = cmd.examples.split("\n").slice(0, 4).join("\n");
    answer += `**Contoh:**\n\`\`\`\n${exLines}\n\`\`\`\n`;
  }

  if (cmd.notes) {
    answer += `\n**Catatan:** ${cmd.notes}\n`;
  }
  if (cmd.warning) {
    answer += `\n**Peringatan:** ${cmd.warning}\n`;
  }

  if (results.length > 1) {
    answer += `\n---\n**Terkait:** ${results.slice(1).map((r) => `\`${r.cmd.name}\``).join(", ")}`;
  }

  return answer;
}

const AsistenPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Halo! 👋 Saya asisten BSynt. Tanyakan apa saja tentang perintah terminal atau syntax database yang ada di dokumentasi ini.\n\nContoh:\n• \"apa itu grep\"\n• \"cara menggunakan SELECT JOIN\"\n• \"jelaskan diskutil\"\n• \"brew install\"" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    const q = input.trim();
    if (!q) return;
    setMessages((prev) => [...prev, { role: "user", content: q }]);
    setInput("");
    setTimeout(() => {
      const answer = generateAnswer(q);
      setMessages((prev) => [...prev, { role: "bot", content: answer }]);
    }, 300);
  };

  return (
    <DocsLayout>
      <div className="flex flex-col h-[calc(100vh-8rem)]">
        <div className="flex items-center gap-2 pb-4 border-b border-border">
          <Bot className="h-6 w-6 text-primary" />
          <h1 className="text-lg font-bold font-mono text-primary">Asisten BSynt</h1>
          <span className="text-xs text-muted-foreground ml-2">Powered by BSynt data</span>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
              {msg.role === "bot" && (
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Terminal className="h-4 w-4 text-primary" />
                </div>
              )}
              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-lg px-4 py-3 text-sm whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground"
                }`}
              >
                {msg.content.split(/(\*\*.*?\*\*|`[^`]+`|```[\s\S]*?```)/g).map((part, j) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={j} className="font-semibold">{part.slice(2, -2)}</strong>;
                  }
                  if (part.startsWith("```") && part.endsWith("```")) {
                    const code = part.slice(3, -3).replace(/^\w*\n/, "");
                    return <pre key={j} className="code-block p-2 my-1 text-xs overflow-x-auto"><code>{code}</code></pre>;
                  }
                  if (part.startsWith("`") && part.endsWith("`")) {
                    return <code key={j} className="px-1 py-0.5 bg-muted rounded text-xs font-mono">{part.slice(1, -1)}</code>;
                  }
                  return <span key={j}>{part}</span>;
                })}
              </div>
              {msg.role === "user" && (
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <User className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="border-t border-border pt-4">
          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya tentang syntax atau perintah..."
              className="flex-1 font-mono text-sm"
            />
            <Button type="submit" size="icon" className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </DocsLayout>
  );
};

export default AsistenPage;
