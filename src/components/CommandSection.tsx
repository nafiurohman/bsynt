import type { Command } from "@/types/docs";
import CodeBlock from "./CodeBlock";
import { AlertTriangle, Info } from "lucide-react";

interface CommandSectionProps {
  command: Command;
}

const CommandSection = ({ command }: CommandSectionProps) => {
  return (
    <section id={command.name} className="scroll-mt-24">
      <div className="doc-card rounded-lg border border-border bg-card p-6 space-y-5">
        {/* Header */}
        <div>
          <h2 className="text-xl font-bold font-mono text-primary glow-green">{command.title}</h2>
          <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{command.description}</p>
        </div>

        {/* Syntax */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Syntax</h3>
          <div className="code-block px-4 py-2.5">
            <code className="font-mono text-sm text-[hsl(var(--terminal-cyan))]">{command.syntax}</code>
          </div>
        </div>

        {/* Options Table */}
        {command.options.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Opsi</h3>
            <div className="overflow-x-auto rounded-md border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary/50 border-b border-border">
                    <th className="text-left px-4 py-2 font-mono font-semibold text-primary whitespace-nowrap">Opsi</th>
                    <th className="text-left px-4 py-2 font-semibold text-muted-foreground">Deskripsi</th>
                  </tr>
                </thead>
                <tbody>
                  {command.options.map((opt, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors">
                      <td className="px-4 py-2 font-mono text-[hsl(var(--terminal-yellow))] whitespace-nowrap">{opt.option}</td>
                      <td className="px-4 py-2 text-muted-foreground">{opt.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Examples */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Contoh</h3>
          <CodeBlock code={command.examples} />
        </div>

        {/* Notes */}
        {command.notes && (
          <div className="flex gap-3 p-4 rounded-md bg-[hsl(var(--terminal-blue)/0.1)] border border-[hsl(var(--terminal-blue)/0.3)]">
            <Info className="h-5 w-5 text-[hsl(var(--terminal-blue))] shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">{command.notes}</p>
          </div>
        )}

        {/* Warning */}
        {command.warning && (
          <div className="flex gap-3 p-4 rounded-md bg-[hsl(var(--terminal-red)/0.1)] border border-[hsl(var(--terminal-red)/0.3)]">
            <AlertTriangle className="h-5 w-5 text-[hsl(var(--terminal-red))] shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">{command.warning}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommandSection;
