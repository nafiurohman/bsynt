import { useLocation } from "react-router-dom";
import { sections } from "@/lib/sections";

export const TableOfContents = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Deteksi kategori dari URL
  const getCurrentCategory = () => {
    if (currentPath.includes("/docs/win-")) return "Windows";
    if (currentPath.includes("/docs/mac-")) return "macOS";
    if (currentPath.includes("/docs/mysql-")) return "MySQL";
    if (currentPath.includes("/docs/pg-")) return "PostgreSQL";
    if (currentPath.includes("/docs/git-")) return "Git";
    if (currentPath.includes("/docs/docker-")) return "Docker";
    if (currentPath.includes("/docs/redis-")) return "Redis";
    if (currentPath.includes("/docs/pentest-")) return "Pentest";
    return "Linux"; // default
  };

  const category = getCurrentCategory();
  const currentSection = sections.find(s => s.label === category);

  if (!currentSection) return null;

  // Ambil semua items dari kategori saat ini
  const allItems = currentSection.subsections.flatMap(sub => sub.items);

  return (
    <aside className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-20 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3">
          {category} — Materi Lainnya
        </h3>
        <div className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
          {allItems.map((item) => (
            <a
              key={item.url}
              href={item.url}
              className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                currentPath === item.url
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};
