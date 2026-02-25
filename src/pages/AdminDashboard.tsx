import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { docsMap } from "./DocsPage";
import type { DocsPage, Command, CommandOption } from "@/types/docs";
import DocsLayout from "@/components/DocsLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LogOut, Save, ChevronDown, ChevronRight, Plus, Trash2, FileJson, Upload } from "lucide-react";
import { toast } from "sonner";

const ADMIN_BASE = "/admin/e8f4a7b9c2d1e6f3a4b8c9d2e1f6a7b9";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [pages, setPages] = useState<Record<string, DocsPage>>({});
  const [selectedPage, setSelectedPage] = useState<string>("");
  const [expandedCmd, setExpandedCmd] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") !== "true") {
      navigate(`${ADMIN_BASE}`);
      return;
    }
    const cloned: Record<string, DocsPage> = {};
    Object.entries(docsMap).forEach(([k, v]) => {
      cloned[k] = JSON.parse(JSON.stringify(v));
    });
    setPages(cloned);
    setSelectedPage(Object.keys(docsMap)[0] || "");
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("admin_auth");
    navigate(`${ADMIN_BASE}`);
  };

  const currentPage = selectedPage ? pages[selectedPage] : null;

  const updatePage = (field: keyof DocsPage, value: string) => {
    if (!selectedPage) return;
    setPages((prev) => ({ ...prev, [selectedPage]: { ...prev[selectedPage], [field]: value } }));
  };

  const updateCommand = (cmdIndex: number, field: keyof Command, value: string) => {
    if (!selectedPage) return;
    setPages((prev) => {
      const p = { ...prev };
      const cmds = [...p[selectedPage].commands];
      cmds[cmdIndex] = { ...cmds[cmdIndex], [field]: value };
      p[selectedPage] = { ...p[selectedPage], commands: cmds };
      return p;
    });
  };

  const updateOption = (cmdIndex: number, optIndex: number, field: keyof CommandOption, value: string) => {
    if (!selectedPage) return;
    setPages((prev) => {
      const p = { ...prev };
      const cmds = [...p[selectedPage].commands];
      const opts = [...cmds[cmdIndex].options];
      opts[optIndex] = { ...opts[optIndex], [field]: value };
      cmds[cmdIndex] = { ...cmds[cmdIndex], options: opts };
      p[selectedPage] = { ...p[selectedPage], commands: cmds };
      return p;
    });
  };

  const addOption = (cmdIndex: number) => {
    if (!selectedPage) return;
    setPages((prev) => {
      const p = { ...prev };
      const cmds = [...p[selectedPage].commands];
      cmds[cmdIndex] = { ...cmds[cmdIndex], options: [...cmds[cmdIndex].options, { option: "", description: "" }] };
      p[selectedPage] = { ...p[selectedPage], commands: cmds };
      return p;
    });
  };

  const removeOption = (cmdIndex: number, optIndex: number) => {
    if (!selectedPage) return;
    setPages((prev) => {
      const p = { ...prev };
      const cmds = [...p[selectedPage].commands];
      cmds[cmdIndex] = { ...cmds[cmdIndex], options: cmds[cmdIndex].options.filter((_, i) => i !== optIndex) };
      p[selectedPage] = { ...p[selectedPage], commands: cmds };
      return p;
    });
  };

  const addCommand = () => {
    if (!selectedPage) return;
    setPages((prev) => {
      const p = { ...prev };
      p[selectedPage] = {
        ...p[selectedPage],
        commands: [...p[selectedPage].commands, { name: "new-cmd", title: "New Command", description: "", syntax: "", options: [], examples: "" }],
      };
      return p;
    });
  };

  const removeCommand = (cmdIndex: number) => {
    if (!selectedPage) return;
    setPages((prev) => {
      const p = { ...prev };
      p[selectedPage] = { ...p[selectedPage], commands: p[selectedPage].commands.filter((_, i) => i !== cmdIndex) };
      return p;
    });
  };

  const handleExport = () => {
    if (!selectedPage || !currentPage) return;
    const blob = new Blob([JSON.stringify(currentPage, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedPage}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`${selectedPage}.json berhasil diexport!`);
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target?.result as string) as DocsPage;
        if (!data.title || !data.description || !Array.isArray(data.commands)) {
          toast.error("Format JSON tidak valid. Harus memiliki title, description, dan commands.");
          return;
        }
        const slug = file.name.replace(/\.json$/, "");
        setPages((prev) => ({ ...prev, [slug]: data }));
        setSelectedPage(slug);
        toast.success(`${file.name} berhasil diimport!`);
      } catch {
        toast.error("File bukan JSON yang valid.");
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSave = () => {
    toast.success("Perubahan disimpan (sesi saat ini). Export JSON untuk menyimpan permanen.");
  };

  if (!currentPage) return null;

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h1 className="text-xl sm:text-2xl font-bold font-mono text-primary glow-green">Admin CMS</h1>
          <div className="flex flex-wrap gap-2">
            <input ref={fileInputRef} type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
            <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} className="gap-1.5">
              <Upload className="h-4 w-4" /> Import JSON
            </Button>
            <Button variant="outline" size="sm" onClick={handleExport} className="gap-1.5">
              <FileJson className="h-4 w-4" /> Export JSON
            </Button>
            <Button size="sm" onClick={handleSave} className="gap-1.5">
              <Save className="h-4 w-4" /> Simpan
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-1.5 text-destructive">
              <LogOut className="h-4 w-4" /> Logout
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pilih Halaman</label>
          <select
            value={selectedPage}
            onChange={(e) => { setSelectedPage(e.target.value); setExpandedCmd(null); }}
            className="w-full rounded-md border border-input bg-card text-foreground px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {Object.entries(pages).map(([key, page]) => (
              <option key={key} value={key}>{page.title}</option>
            ))}
          </select>
        </div>

        <div className="space-y-3 p-4 rounded-lg border border-border bg-card">
          <h3 className="text-sm font-semibold text-foreground">Metadata Halaman</h3>
          <div className="grid gap-3">
            <div>
              <label className="text-xs text-muted-foreground">Title</label>
              <Input value={currentPage.title} onChange={(e) => updatePage("title", e.target.value)} className="font-mono" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Description</label>
              <Textarea value={currentPage.description} onChange={(e) => updatePage("description", e.target.value)} rows={2} />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Commands ({currentPage.commands.length})</h3>
            <Button variant="outline" size="sm" onClick={addCommand} className="gap-1.5">
              <Plus className="h-3.5 w-3.5" /> Tambah Command
            </Button>
          </div>

          {currentPage.commands.map((cmd, ci) => (
            <div key={ci} className="rounded-lg border border-border bg-card overflow-hidden">
              <button
                onClick={() => setExpandedCmd(expandedCmd === cmd.name + ci ? null : cmd.name + ci)}
                className="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-secondary/30 transition-colors text-left"
              >
                <span className="font-mono font-semibold text-primary text-sm">{cmd.name}</span>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={(e) => { e.stopPropagation(); removeCommand(ci); }}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                  {expandedCmd === cmd.name + ci ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </div>
              </button>

              {expandedCmd === cmd.name + ci && (
                <div className="p-3 sm:p-4 pt-0 space-y-3 border-t border-border">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-xs text-muted-foreground">Name</label>
                      <Input value={cmd.name} onChange={(e) => updateCommand(ci, "name", e.target.value)} className="font-mono" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground">Title</label>
                      <Input value={cmd.title} onChange={(e) => updateCommand(ci, "title", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Description</label>
                    <Textarea value={cmd.description} onChange={(e) => updateCommand(ci, "description", e.target.value)} rows={2} />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Syntax</label>
                    <Input value={cmd.syntax} onChange={(e) => updateCommand(ci, "syntax", e.target.value)} className="font-mono" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs text-muted-foreground">Options ({cmd.options.length})</label>
                      <Button variant="ghost" size="sm" onClick={() => addOption(ci)} className="h-7 text-xs gap-1">
                        <Plus className="h-3 w-3" /> Opsi
                      </Button>
                    </div>
                    {cmd.options.map((opt, oi) => (
                      <div key={oi} className="flex flex-col sm:flex-row gap-2 items-start">
                        <Input value={opt.option} onChange={(e) => updateOption(ci, oi, "option", e.target.value)} placeholder="Opsi" className="font-mono sm:w-1/3" />
                        <Input value={opt.description} onChange={(e) => updateOption(ci, oi, "description", e.target.value)} placeholder="Deskripsi" className="flex-1" />
                        <Button variant="ghost" size="icon" className="h-10 w-10 text-destructive shrink-0" onClick={() => removeOption(ci, oi)}>
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground">Examples</label>
                    <Textarea value={cmd.examples} onChange={(e) => updateCommand(ci, "examples", e.target.value)} rows={6} className="font-mono text-xs" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Notes (opsional)</label>
                    <Input value={cmd.notes || ""} onChange={(e) => updateCommand(ci, "notes", e.target.value)} />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Warning (opsional)</label>
                    <Input value={cmd.warning || ""} onChange={(e) => updateCommand(ci, "warning", e.target.value)} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </DocsLayout>
  );
};

export default AdminDashboard;
