import { Link } from "react-router-dom";
import DocsLayout from "@/components/DocsLayout";
import {
  Terminal, FolderOpen, Eye, Shield, Search, FileText, Archive,
  HardDrive, Cpu, Users, Globe, Monitor, Package, Server,
  GitBranch, Code, Zap, Settings, Wifi, Laptop, Database, Table,
  FileCode, Link as LinkIcon, Layers, BookOpen, Lock,
  BarChart3, Timer, ScrollText, Cog, Calendar, Type, Binary,
  FunctionSquare, Bell, Download, LayoutList, Search as SearchIcon,
  Container, Box, Braces, Target
} from "lucide-react";

interface CategoryGroup {
  label: string;
  icon: React.ElementType;
  items: { id: string; title: string; desc: string; icon: React.ElementType }[];
}

const categories: CategoryGroup[] = [
  // Linux
  {
    label: "Linux — Dasar",
    icon: Terminal,
    items: [
      { id: "navigasi-dasar", title: "Navigasi Dasar", desc: "cd, ls, pwd, clear, history", icon: Terminal },
      { id: "file-management", title: "File Management", desc: "cp, mv, rm, mkdir, touch", icon: FolderOpen },
      { id: "file-viewing", title: "File Viewing", desc: "cat, less, head, tail, wc", icon: Eye },
      { id: "file-permission", title: "File Permission", desc: "chmod, chown, chgrp, umask", icon: Shield },
      { id: "file-search", title: "File Search", desc: "find, locate, whereis, which", icon: Search },
    ],
  },
  {
    label: "Linux — Teks, Sistem & Lanjutan",
    icon: Terminal,
    items: [
      { id: "text-processing", title: "Text Processing", desc: "grep, sed, awk, sort, cut", icon: FileText },
      { id: "redirection-pipe", title: "Redirection & Pipe", desc: ">, >>, <, |, tee", icon: GitBranch },
      { id: "compression", title: "Compression", desc: "tar, gzip, zip, bzip2", icon: Archive },
      { id: "disk-storage", title: "Disk Storage", desc: "df, du, fdisk, mount", icon: HardDrive },
      { id: "process-management", title: "Process Management", desc: "ps, top, kill, bg, fg", icon: Cpu },
      { id: "user-management", title: "User Management", desc: "useradd, passwd, groups", icon: Users },
      { id: "system-info", title: "System Info", desc: "uname, uptime, free, lscpu", icon: Monitor },
      { id: "network", title: "Network", desc: "ping, curl, ss, ip, wget", icon: Globe },
      { id: "service-systemd", title: "Service (systemd)", desc: "systemctl, journalctl", icon: Server },
      { id: "package-apt", title: "Package (APT)", desc: "apt, dpkg - Debian/Ubuntu", icon: Package },
      { id: "package-dnf", title: "Package (DNF)", desc: "dnf, rpm - Fedora/RHEL", icon: Package },
      { id: "package-pacman", title: "Package (Pacman)", desc: "pacman - Arch Linux", icon: Package },
      { id: "shell-scripting", title: "Shell Scripting", desc: "Variabel, loop, fungsi, kondisi", icon: Code },
      { id: "tips-shortcut", title: "Tips & Shortcut", desc: "Keyboard shortcuts, tips pro", icon: Zap },
    ],
  },
  // Windows
  {
    label: "Windows — CMD & PowerShell",
    icon: Monitor,
    items: [
      { id: "win-navigasi-dasar", title: "Navigasi Dasar", desc: "cd, dir, cls, echo, tree", icon: Terminal },
      { id: "win-file-management", title: "File Management", desc: "copy, xcopy, robocopy, del", icon: FolderOpen },
      { id: "win-file-viewing", title: "File Viewing", desc: "type, more, find, findstr", icon: Eye },
      { id: "win-file-permission", title: "File Permission", desc: "icacls, attrib, takeown", icon: Shield },
      { id: "win-file-search", title: "File Search", desc: "where, dir /s, forfiles", icon: Search },
      { id: "win-text-processing", title: "Text Processing", desc: "findstr, sort, Select-String", icon: FileText },
      { id: "win-redirection-pipe", title: "Redirection & Pipe", desc: ">, >>, |, clip, Tee-Object", icon: GitBranch },
      { id: "win-compression", title: "Compression", desc: "Compress-Archive, tar, compact", icon: Archive },
      { id: "win-disk-storage", title: "Disk & Storage", desc: "diskpart, chkdsk, fsutil", icon: HardDrive },
      { id: "win-process-management", title: "Process Management", desc: "tasklist, taskkill, start", icon: Cpu },
      { id: "win-user-management", title: "User Management", desc: "net user, net localgroup", icon: Users },
      { id: "win-system-info", title: "System Info", desc: "systeminfo, wmic, msinfo32", icon: Monitor },
      { id: "win-network", title: "Network", desc: "ipconfig, ping, netstat, netsh", icon: Globe },
      { id: "win-service", title: "Service & Task", desc: "sc, schtasks, wevtutil", icon: Server },
      { id: "win-package", title: "Package Manager", desc: "winget, choco, scoop", icon: Package },
      { id: "win-scripting", title: "Batch & PS Scripting", desc: "Batch script, PowerShell", icon: Code },
      { id: "win-registry", title: "Registry & Config", desc: "reg, bcdedit, sfc, DISM", icon: Settings },
      { id: "win-remote", title: "Remote & SSH", desc: "ssh, mstsc, WinRM", icon: Wifi },
      { id: "win-tips-shortcut", title: "Tips & Shortcut", desc: "Shortcuts, alias, tips", icon: Zap },
    ],
  },
  // macOS
  {
    label: "macOS — Terminal & Tools",
    icon: Laptop,
    items: [
      { id: "mac-navigasi-dasar", title: "Navigasi Dasar", desc: "cd, ls, open, pushd, tree", icon: Terminal },
      { id: "mac-file-management", title: "File Management", desc: "cp, mv, rm, ditto, ln", icon: FolderOpen },
      { id: "mac-file-viewing", title: "File Viewing", desc: "cat, less, mdls, file", icon: Eye },
      { id: "mac-file-permission", title: "File Permission", desc: "chmod, xattr, chflags", icon: Shield },
      { id: "mac-file-search", title: "File Search", desc: "find, mdfind, which", icon: Search },
      { id: "mac-text-processing", title: "Text Processing", desc: "grep, sed, awk, pbcopy", icon: FileText },
      { id: "mac-compression", title: "Compression", desc: "tar, zip, hdiutil", icon: Archive },
      { id: "mac-disk-storage", title: "Disk & Storage", desc: "df, diskutil, tmutil", icon: HardDrive },
      { id: "mac-process-management", title: "Process Management", desc: "ps, top, lsof, killall", icon: Cpu },
      { id: "mac-network", title: "Network", desc: "ifconfig, networksetup, scutil", icon: Globe },
      { id: "mac-system-info", title: "System Info", desc: "sw_vers, system_profiler, defaults", icon: Monitor },
      { id: "mac-service", title: "Service (launchctl)", desc: "launchctl, brew services", icon: Server },
      { id: "mac-package", title: "Package (Homebrew)", desc: "brew, mas", icon: Package },
      { id: "mac-scripting", title: "Shell & AppleScript", desc: "zsh, osascript, automator", icon: Code },
      { id: "mac-tips-shortcut", title: "Tips & Shortcut", desc: "caffeinate, say, oh-my-zsh", icon: Zap },
    ],
  },
  // MySQL
  {
    label: "MySQL — Database & Query",
    icon: Database,
    items: [
      { id: "mysql-database", title: "Database Management", desc: "CREATE, DROP, ALTER DATABASE", icon: Database },
      { id: "mysql-table", title: "Table Management", desc: "CREATE, ALTER, DROP TABLE", icon: Table },
      { id: "mysql-data-types", title: "Data Types", desc: "INT, VARCHAR, JSON, TIMESTAMP", icon: Binary },
      { id: "mysql-constraints", title: "Constraints", desc: "PRIMARY KEY, FOREIGN KEY, CHECK", icon: Lock },
      { id: "mysql-crud", title: "CRUD Operations", desc: "SELECT, INSERT, UPDATE, DELETE", icon: FileCode },
      { id: "mysql-joins", title: "Joins", desc: "INNER, LEFT, RIGHT, CROSS JOIN", icon: LinkIcon },
      { id: "mysql-subquery", title: "Subquery", desc: "IN, EXISTS, correlated subquery", icon: Layers },
      { id: "mysql-views", title: "Views", desc: "CREATE VIEW, WITH CHECK OPTION", icon: Eye },
    ],
  },
  {
    label: "MySQL — Functions & Advanced",
    icon: Database,
    items: [
      { id: "mysql-string-functions", title: "String Functions", desc: "CONCAT, REPLACE, REGEXP", icon: Type },
      { id: "mysql-date-functions", title: "Date Functions", desc: "NOW, DATE_FORMAT, DATEDIFF", icon: Calendar },
      { id: "mysql-aggregate", title: "Aggregate Functions", desc: "COUNT, SUM, GROUP_CONCAT", icon: BarChart3 },
      { id: "mysql-window-functions", title: "Window Functions", desc: "ROW_NUMBER, RANK, LAG, LEAD", icon: LayoutList },
      { id: "mysql-index", title: "Index & EXPLAIN", desc: "B-Tree, FULLTEXT, EXPLAIN", icon: SearchIcon },
      { id: "mysql-stored-procedure", title: "Stored Procedures", desc: "CREATE PROCEDURE, CALL", icon: Cog },
      { id: "mysql-functions", title: "Functions (UDF)", desc: "CREATE FUNCTION, RETURNS", icon: FunctionSquare },
      { id: "mysql-triggers", title: "Triggers", desc: "BEFORE/AFTER INSERT/UPDATE/DELETE", icon: Bell },
      { id: "mysql-transactions", title: "Transactions", desc: "BEGIN, COMMIT, ROLLBACK, SAVEPOINT", icon: ScrollText },
      { id: "mysql-user-management", title: "User Management", desc: "CREATE USER, GRANT, REVOKE", icon: Users },
      { id: "mysql-backup", title: "Backup & Restore", desc: "mysqldump, LOAD DATA", icon: Download },
      { id: "mysql-performance", title: "Performance", desc: "EXPLAIN ANALYZE, slow query log", icon: Timer },
    ],
  },
  // PostgreSQL
  {
    label: "PostgreSQL — Database & Query",
    icon: Database,
    items: [
      { id: "pg-database", title: "Database Management", desc: "CREATE, DROP, ALTER DATABASE", icon: Database },
      { id: "pg-table", title: "Table Management", desc: "CREATE, ALTER, DROP TABLE", icon: Table },
      { id: "pg-data-types", title: "Data Types", desc: "INT, TEXT, JSON, ARRAY, UUID", icon: Binary },
      { id: "pg-constraints", title: "Constraints", desc: "PRIMARY KEY, FOREIGN KEY, CHECK", icon: Lock },
      { id: "pg-crud", title: "CRUD Operations", desc: "SELECT, INSERT, UPDATE, DELETE", icon: FileCode },
      { id: "pg-joins", title: "Joins", desc: "INNER, LEFT, RIGHT, FULL JOIN", icon: LinkIcon },
      { id: "pg-subquery", title: "Subquery", desc: "IN, EXISTS, correlated subquery", icon: Layers },
      { id: "pg-views", title: "Views", desc: "CREATE VIEW, MATERIALIZED VIEW", icon: Eye },
    ],
  },
  {
    label: "PostgreSQL — Functions & Advanced",
    icon: Database,
    items: [
      { id: "pg-string-functions", title: "String Functions", desc: "CONCAT, REGEXP, SPLIT_PART", icon: Type },
      { id: "pg-date-functions", title: "Date Functions", desc: "NOW, AGE, DATE_TRUNC", icon: Calendar },
      { id: "pg-aggregate", title: "Aggregate Functions", desc: "COUNT, SUM, STRING_AGG", icon: BarChart3 },
      { id: "pg-window-functions", title: "Window Functions", desc: "ROW_NUMBER, RANK, LAG, LEAD", icon: LayoutList },
      { id: "pg-json-functions", title: "JSON Functions", desc: "JSON/JSONB operators, jsonb_set", icon: Braces },
      { id: "pg-index", title: "Index & EXPLAIN", desc: "B-Tree, GiST, GIN, EXPLAIN", icon: SearchIcon },
      { id: "pg-functions", title: "Functions (UDF)", desc: "CREATE FUNCTION, PL/pgSQL", icon: FunctionSquare },
      { id: "pg-triggers", title: "Triggers", desc: "BEFORE/AFTER triggers", icon: Bell },
      { id: "pg-transactions", title: "Transactions", desc: "BEGIN, COMMIT, SAVEPOINT", icon: ScrollText },
      { id: "pg-user-management", title: "User Management", desc: "CREATE ROLE, GRANT, REVOKE", icon: Users },
      { id: "pg-backup", title: "Backup & Restore", desc: "pg_dump, pg_restore", icon: Download },
      { id: "pg-performance", title: "Performance", desc: "EXPLAIN ANALYZE, vacuum", icon: Timer },
    ],
  },
  // Git
  {
    label: "Git — Version Control",
    icon: GitBranch,
    items: [
      { id: "git-config", title: "Setup & Konfigurasi", desc: "user.name, user.email, alias", icon: Settings },
      { id: "git-init-clone", title: "Init & Clone", desc: "git init, git clone", icon: FolderOpen },
      { id: "git-status-log", title: "Status & Log", desc: "git status, git log, git diff", icon: FileText },
      { id: "git-staging-commit", title: "Staging & Commit", desc: "git add, git commit", icon: FileCode },
      { id: "git-branching", title: "Branch Management", desc: "git branch, git checkout, git switch", icon: GitBranch },
      { id: "git-merge-rebase", title: "Merge & Rebase", desc: "git merge, git rebase", icon: Layers },
      { id: "git-remote", title: "Remote Repository", desc: "git push, git pull, git fetch", icon: Globe },
      { id: "git-undo-reset", title: "Undo & Reset", desc: "git reset, git revert, git restore", icon: Archive },
      { id: "git-stash", title: "Stash", desc: "git stash, git stash pop", icon: Box },
      { id: "git-tag", title: "Tag", desc: "git tag, annotated tags", icon: Bell },
      { id: "git-inspect-debug", title: "Inspect & Debug", desc: "git blame, git bisect, git show", icon: SearchIcon },
      { id: "git-submodule", title: "Submodule", desc: "git submodule add, update", icon: Layers },
      { id: "git-advanced", title: "Advanced Topics", desc: "cherry-pick, reflog, hooks", icon: Zap },
    ],
  },
  // Docker
  {
    label: "Docker — Containerization",
    icon: Container,
    items: [
      { id: "docker-container", title: "Container Management", desc: "docker run, ps, stop, exec", icon: Container },
      { id: "docker-image", title: "Image Management", desc: "docker build, pull, push, tag", icon: Box },
      { id: "docker-volume", title: "Volume Management", desc: "docker volume create, ls, rm", icon: HardDrive },
      { id: "docker-network", title: "Network Management", desc: "docker network create, connect", icon: Globe },
      { id: "docker-compose", title: "Docker Compose", desc: "docker-compose up, down, logs", icon: Layers },
      { id: "docker-advanced", title: "Advanced Topics", desc: "Multi-stage, healthcheck, secrets", icon: Zap },
    ],
  },
  // Redis
  {
    label: "Redis — In-Memory Database",
    icon: Database,
    items: [
      { id: "redis-basics", title: "Basics & Connection", desc: "redis-cli, SELECT, INFO", icon: Database },
      { id: "redis-keys", title: "Keys Management", desc: "KEYS, EXISTS, DEL, EXPIRE", icon: FileCode },
      { id: "redis-string", title: "String", desc: "SET, GET, INCR, APPEND", icon: Type },
      { id: "redis-list", title: "List", desc: "LPUSH, RPUSH, LPOP, LRANGE", icon: LayoutList },
      { id: "redis-hash", title: "Hash", desc: "HSET, HGET, HGETALL, HINCRBY", icon: Table },
      { id: "redis-set", title: "Set", desc: "SADD, SMEMBERS, SINTER, SUNION", icon: Layers },
      { id: "redis-advanced", title: "Advanced Topics", desc: "Pub/Sub, Transactions, Lua", icon: Zap },
    ],
  },
  // Pentest
  {
    label: "Penetration Testing — Security",
    icon: Target,
    items: [
      { id: "pentest-networking", title: "Networking & Info Gathering", desc: "ifconfig, ping, traceroute, dig, curl", icon: Globe },
      { id: "pentest-nmap", title: "Nmap Scanning", desc: "Port scan, service detection, OS fingerprint", icon: SearchIcon },
      { id: "pentest-osint", title: "OSINT & Reconnaissance", desc: "theHarvester, Shodan, WhatWeb, Sublist3r", icon: Eye },
      { id: "pentest-metasploit", title: "Metasploit Framework", desc: "Exploit, payload, meterpreter, msfvenom", icon: Target },
      { id: "pentest-burp", title: "Burp Suite & Web Attack", desc: "Proxy, Repeater, Intruder, SQLMap, Gobuster", icon: Globe },
      { id: "pentest-web-tools", title: "Web Attack Tools", desc: "SQLMap, Gobuster, Directory Bruteforce", icon: Globe },
      { id: "pentest-password", title: "Password Attacks", desc: "Hydra, John the Ripper, Hashcat", icon: Lock },
      { id: "pentest-file-analysis", title: "File & Payload Analysis", desc: "exiftool, strings, base64, xxd, binwalk", icon: FileText },
      { id: "pentest-privilege", title: "Privilege Escalation", desc: "sudo -l, SUID, enumeration, LinPEAS", icon: Users },
    ],
  },
];

const HomePage = () => {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-primary glow-green flex items-center gap-3">
            <BookOpen className="h-7 w-7 md:h-8 md:w-8" />
            BSynt
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Dokumentasi lengkap syntax dan perintah untuk <strong>Linux</strong>, <strong>Windows</strong>, <strong>macOS</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>Git</strong>, <strong>Docker</strong>, <strong>Redis</strong>, <strong>Penetration Testing</strong> — dengan penjelasan detail, opsi, dan contoh penggunaan.
          </p>
          <div className="code-block inline-block px-4 py-2">
            <code className="font-mono text-xs sm:text-sm">
              <span className="text-[hsl(var(--terminal-green))]">user@bsynt</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-[hsl(var(--terminal-blue))]">~</span>
              <span className="text-muted-foreground">$ </span>
              <span className="text-[hsl(var(--terminal-cyan))]">cat docs --all --topics cli,sql,os</span>
            </code>
          </div>
        </div>

        {categories.map((cat) => (
          <div key={cat.label} className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground border-b border-border pb-2 flex items-center gap-2">
              <cat.icon className="h-4 w-4 text-primary" />
              {cat.label}
            </h2>
            <ul className="space-y-1">
              {cat.items.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/docs/${item.id}`}
                    className="doc-card flex items-center gap-4 p-3 sm:p-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-all group"
                  >
                    <item.icon className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="min-w-0">
                      <span className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">{item.title}</span>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">{item.desc}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </DocsLayout>
  );
};

export default HomePage;
