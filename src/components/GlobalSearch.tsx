import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { docsMap } from "@/pages/DocsPage";

interface SearchResult {
  slug: string;
  pageTitle: string;
  cmdName: string;
  cmdTitle: string;
  match: string;
}

const GlobalSearch = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    const found: SearchResult[] = [];

    Object.entries(docsMap).forEach(([slug, page]) => {
      page.commands.forEach((cmd) => {
        const fields = [cmd.name, cmd.title, cmd.description, cmd.syntax, cmd.examples, cmd.notes || "", cmd.warning || ""];
        const optFields = cmd.options.map((o) => `${o.option} ${o.description}`);
        const all = [...fields, ...optFields].join(" ").toLowerCase();
        if (all.includes(q)) {
          // Find matching snippet
          const idx = all.indexOf(q);
          const start = Math.max(0, idx - 30);
          const end = Math.min(all.length, idx + q.length + 30);
          const snippet = (start > 0 ? "..." : "") + all.slice(start, end) + (end < all.length ? "..." : "");
          found.push({ slug, pageTitle: page.title, cmdName: cmd.name, cmdTitle: cmd.title, match: snippet });
        }
      });
    });
    return found.slice(0, 15);
  }, [query]);

  const go = (slug: string, cmdName: string) => {
    navigate(`/docs/${slug}#${cmdName}`);
    setQuery("");
    setOpen(false);
  };

  return (
    <div className="relative w-full max-w-sm">
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="Cari perintah..."
          className="pl-9 pr-8 h-9 text-sm font-mono"
        />
        {query && (
          <button onClick={() => { setQuery(""); setOpen(false); }} className="absolute right-2.5 top-1/2 -translate-y-1/2">
            <X className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        )}
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-popover border border-border rounded-lg shadow-lg max-h-80 overflow-y-auto">
          {results.map((r, i) => (
            <button
              key={i}
              onClick={() => go(r.slug, r.cmdName)}
              className="w-full text-left px-3 py-2.5 hover:bg-accent/20 transition-colors border-b border-border/50 last:border-0"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-primary font-semibold">{r.cmdName}</span>
                <span className="text-xs text-muted-foreground">• {r.pageTitle}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">{r.match}</p>
            </button>
          ))}
        </div>
      )}
      {open && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-popover border border-border rounded-lg shadow-lg p-4 text-center text-sm text-muted-foreground">
          Tidak ditemukan hasil untuk "{query}"
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
