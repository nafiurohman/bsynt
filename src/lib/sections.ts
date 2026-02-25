import {
  Terminal, FolderOpen, Eye, Shield, Search, FileText, Archive,
  HardDrive, Cpu, Users, Globe, Monitor, Package, Server,
  GitBranch, Code, Zap, Settings, Wifi, Laptop, Database, Table,
  FileCode, Link, Layers, Lock, BarChart3, Timer, ScrollText,
  Cog, Calendar, Type, Binary, FunctionSquare, Bell, Download,
  LayoutList, Search as SearchIcon, Container, Box, Braces, Target
} from "lucide-react";

export interface SidebarSection {
  label: string;
  icon: React.ElementType;
  subsections: {
    label: string;
    items: { title: string; url: string; icon: React.ElementType }[];
  }[];
}

export const sections: SidebarSection[] = [
  {
    label: "Linux",
    icon: Terminal,
    subsections: [
      {
        label: "Dasar",
        items: [
          { title: "Navigasi Dasar", url: "/docs/navigasi-dasar", icon: Terminal },
          { title: "File Management", url: "/docs/file-management", icon: FolderOpen },
          { title: "File Viewing", url: "/docs/file-viewing", icon: Eye },
          { title: "File Permission", url: "/docs/file-permission", icon: Shield },
          { title: "File Search", url: "/docs/file-search", icon: Search },
        ],
      },
      {
        label: "Teks & Data",
        items: [
          { title: "Text Processing", url: "/docs/text-processing", icon: FileText },
          { title: "Redirection & Pipe", url: "/docs/redirection-pipe", icon: GitBranch },
        ],
      },
      {
        label: "Sistem",
        items: [
          { title: "Compression", url: "/docs/compression", icon: Archive },
          { title: "Disk Storage", url: "/docs/disk-storage", icon: HardDrive },
          { title: "Process Management", url: "/docs/process-management", icon: Cpu },
          { title: "User Management", url: "/docs/user-management", icon: Users },
          { title: "System Info", url: "/docs/system-info", icon: Monitor },
          { title: "Network", url: "/docs/network", icon: Globe },
        ],
      },
      {
        label: "Service & Package",
        items: [
          { title: "Service (systemd)", url: "/docs/service-systemd", icon: Server },
          { title: "Package (APT)", url: "/docs/package-apt", icon: Package },
          { title: "Package (DNF)", url: "/docs/package-dnf", icon: Package },
          { title: "Package (Pacman)", url: "/docs/package-pacman", icon: Package },
        ],
      },
      {
        label: "Lanjutan",
        items: [
          { title: "Shell Scripting", url: "/docs/shell-scripting", icon: Code },
          { title: "Tips & Shortcut", url: "/docs/tips-shortcut", icon: Zap },
        ],
      },
    ],
  },
  {
    label: "Windows",
    icon: Monitor,
    subsections: [
      {
        label: "Dasar",
        items: [
          { title: "Navigasi Dasar", url: "/docs/win-navigasi-dasar", icon: Terminal },
          { title: "File Management", url: "/docs/win-file-management", icon: FolderOpen },
          { title: "File Viewing", url: "/docs/win-file-viewing", icon: Eye },
          { title: "File Permission", url: "/docs/win-file-permission", icon: Shield },
          { title: "File Search", url: "/docs/win-file-search", icon: Search },
        ],
      },
      {
        label: "Teks & Data",
        items: [
          { title: "Text Processing", url: "/docs/win-text-processing", icon: FileText },
          { title: "Redirection & Pipe", url: "/docs/win-redirection-pipe", icon: GitBranch },
        ],
      },
      {
        label: "Sistem",
        items: [
          { title: "Compression", url: "/docs/win-compression", icon: Archive },
          { title: "Disk & Storage", url: "/docs/win-disk-storage", icon: HardDrive },
          { title: "Process Management", url: "/docs/win-process-management", icon: Cpu },
          { title: "User Management", url: "/docs/win-user-management", icon: Users },
          { title: "System Info", url: "/docs/win-system-info", icon: Monitor },
          { title: "Network", url: "/docs/win-network", icon: Globe },
        ],
      },
      {
        label: "Service & Package",
        items: [
          { title: "Service & Task", url: "/docs/win-service", icon: Server },
          { title: "Package Manager", url: "/docs/win-package", icon: Package },
        ],
      },
      {
        label: "Lanjutan",
        items: [
          { title: "Batch & PS Scripting", url: "/docs/win-scripting", icon: Code },
          { title: "Registry & Config", url: "/docs/win-registry", icon: Settings },
          { title: "Remote & SSH", url: "/docs/win-remote", icon: Wifi },
          { title: "Tips & Shortcut", url: "/docs/win-tips-shortcut", icon: Zap },
        ],
      },
    ],
  },
  {
    label: "macOS",
    icon: Laptop,
    subsections: [
      {
        label: "Dasar",
        items: [
          { title: "Navigasi Dasar", url: "/docs/mac-navigasi-dasar", icon: Terminal },
          { title: "File Management", url: "/docs/mac-file-management", icon: FolderOpen },
          { title: "File Viewing", url: "/docs/mac-file-viewing", icon: Eye },
          { title: "File Permission", url: "/docs/mac-file-permission", icon: Shield },
          { title: "File Search", url: "/docs/mac-file-search", icon: Search },
        ],
      },
      {
        label: "Teks & Data",
        items: [
          { title: "Text Processing", url: "/docs/mac-text-processing", icon: FileText },
        ],
      },
      {
        label: "Sistem",
        items: [
          { title: "Compression", url: "/docs/mac-compression", icon: Archive },
          { title: "Disk & Storage", url: "/docs/mac-disk-storage", icon: HardDrive },
          { title: "Process Management", url: "/docs/mac-process-management", icon: Cpu },
          { title: "Network", url: "/docs/mac-network", icon: Globe },
          { title: "System Info", url: "/docs/mac-system-info", icon: Monitor },
        ],
      },
      {
        label: "Service & Package",
        items: [
          { title: "Service (launchctl)", url: "/docs/mac-service", icon: Server },
          { title: "Package (Homebrew)", url: "/docs/mac-package", icon: Package },
        ],
      },
      {
        label: "Lanjutan",
        items: [
          { title: "Shell & AppleScript", url: "/docs/mac-scripting", icon: Code },
          { title: "Tips & Shortcut", url: "/docs/mac-tips-shortcut", icon: Zap },
        ],
      },
    ],
  },
  {
    label: "MySQL",
    icon: Database,
    subsections: [
      {
        label: "Dasar",
        items: [
          { title: "Database Management", url: "/docs/mysql-database", icon: Database },
          { title: "Table Management", url: "/docs/mysql-table", icon: Table },
          { title: "Data Types", url: "/docs/mysql-data-types", icon: Binary },
          { title: "Constraints", url: "/docs/mysql-constraints", icon: Lock },
        ],
      },
      {
        label: "Query",
        items: [
          { title: "CRUD Operations", url: "/docs/mysql-crud", icon: FileCode },
          { title: "Joins", url: "/docs/mysql-joins", icon: Link },
          { title: "Subquery", url: "/docs/mysql-subquery", icon: Layers },
          { title: "Views", url: "/docs/mysql-views", icon: Eye },
        ],
      },
      {
        label: "Functions",
        items: [
          { title: "String Functions", url: "/docs/mysql-string-functions", icon: Type },
          { title: "Date Functions", url: "/docs/mysql-date-functions", icon: Calendar },
          { title: "Aggregate Functions", url: "/docs/mysql-aggregate", icon: BarChart3 },
          { title: "Window Functions", url: "/docs/mysql-window-functions", icon: LayoutList },
        ],
      },
      {
        label: "Advanced",
        items: [
          { title: "Index & EXPLAIN", url: "/docs/mysql-index", icon: SearchIcon },
          { title: "Stored Procedures", url: "/docs/mysql-stored-procedure", icon: Cog },
          { title: "Functions (UDF)", url: "/docs/mysql-functions", icon: FunctionSquare },
          { title: "Triggers", url: "/docs/mysql-triggers", icon: Bell },
          { title: "Transactions", url: "/docs/mysql-transactions", icon: ScrollText },
        ],
      },
      {
        label: "Admin",
        items: [
          { title: "User Management", url: "/docs/mysql-user-management", icon: Users },
          { title: "Backup & Restore", url: "/docs/mysql-backup", icon: Download },
          { title: "Performance", url: "/docs/mysql-performance", icon: Timer },
        ],
      },
    ],
  },
  {
    label: "PostgreSQL",
    icon: Database,
    subsections: [
      {
        label: "Dasar",
        items: [
          { title: "Database Management", url: "/docs/pg-database", icon: Database },
          { title: "Table Management", url: "/docs/pg-table", icon: Table },
          { title: "Data Types", url: "/docs/pg-data-types", icon: Binary },
          { title: "Constraints", url: "/docs/pg-constraints", icon: Lock },
        ],
      },
      {
        label: "Query",
        items: [
          { title: "CRUD Operations", url: "/docs/pg-crud", icon: FileCode },
          { title: "Joins", url: "/docs/pg-joins", icon: Link },
          { title: "Subquery", url: "/docs/pg-subquery", icon: Layers },
          { title: "Views", url: "/docs/pg-views", icon: Eye },
        ],
      },
      {
        label: "Functions",
        items: [
          { title: "String Functions", url: "/docs/pg-string-functions", icon: Type },
          { title: "Date Functions", url: "/docs/pg-date-functions", icon: Calendar },
          { title: "Aggregate Functions", url: "/docs/pg-aggregate", icon: BarChart3 },
          { title: "Window Functions", url: "/docs/pg-window-functions", icon: LayoutList },
          { title: "JSON Functions", url: "/docs/pg-json-functions", icon: Braces },
        ],
      },
      {
        label: "Advanced",
        items: [
          { title: "Index & EXPLAIN", url: "/docs/pg-index", icon: SearchIcon },
          { title: "Functions (UDF)", url: "/docs/pg-functions", icon: FunctionSquare },
          { title: "Triggers", url: "/docs/pg-triggers", icon: Bell },
          { title: "Transactions", url: "/docs/pg-transactions", icon: ScrollText },
        ],
      },
      {
        label: "Admin",
        items: [
          { title: "User Management", url: "/docs/pg-user-management", icon: Users },
          { title: "Backup & Restore", url: "/docs/pg-backup", icon: Download },
          { title: "Performance", url: "/docs/pg-performance", icon: Timer },
        ],
      },
    ],
  },
  {
    label: "Git",
    icon: GitBranch,
    subsections: [
      {
        label: "Dasar",
        items: [
          { title: "Setup & Konfigurasi", url: "/docs/git-config", icon: Settings },
          { title: "Init & Clone", url: "/docs/git-init-clone", icon: FolderOpen },
          { title: "Status & Log", url: "/docs/git-status-log", icon: FileText },
          { title: "Staging & Commit", url: "/docs/git-staging-commit", icon: FileCode },
        ],
      },
      {
        label: "Branching",
        items: [
          { title: "Branch Management", url: "/docs/git-branching", icon: GitBranch },
          { title: "Merge & Rebase", url: "/docs/git-merge-rebase", icon: Layers },
        ],
      },
      {
        label: "Remote",
        items: [
          { title: "Remote Repository", url: "/docs/git-remote", icon: Globe },
          { title: "Undo & Reset", url: "/docs/git-undo-reset", icon: Archive },
          { title: "Stash", url: "/docs/git-stash", icon: Box },
        ],
      },
      {
        label: "Advanced",
        items: [
          { title: "Tag", url: "/docs/git-tag", icon: Bell },
          { title: "Inspect & Debug", url: "/docs/git-inspect-debug", icon: SearchIcon },
          { title: "Submodule", url: "/docs/git-submodule", icon: Layers },
          { title: "Advanced Topics", url: "/docs/git-advanced", icon: Zap },
        ],
      },
    ],
  },
  {
    label: "Docker",
    icon: Container,
    subsections: [
      {
        label: "Core",
        items: [
          { title: "Container Management", url: "/docs/docker-container", icon: Container },
          { title: "Image Management", url: "/docs/docker-image", icon: Box },
          { title: "Volume Management", url: "/docs/docker-volume", icon: HardDrive },
          { title: "Network Management", url: "/docs/docker-network", icon: Globe },
        ],
      },
      {
        label: "Advanced",
        items: [
          { title: "Docker Compose", url: "/docs/docker-compose", icon: Layers },
          { title: "Advanced Topics", url: "/docs/docker-advanced", icon: Zap },
        ],
      },
    ],
  },
  {
    label: "Redis",
    icon: Database,
    subsections: [
      {
        label: "Basics",
        items: [
          { title: "Basics & Connection", url: "/docs/redis-basics", icon: Database },
          { title: "Keys Management", url: "/docs/redis-keys", icon: FileCode },
        ],
      },
      {
        label: "Data Types",
        items: [
          { title: "String", url: "/docs/redis-string", icon: Type },
          { title: "List", url: "/docs/redis-list", icon: LayoutList },
          { title: "Hash", url: "/docs/redis-hash", icon: Table },
          { title: "Set", url: "/docs/redis-set", icon: Layers },
        ],
      },
      {
        label: "Advanced",
        items: [
          { title: "Advanced Topics", url: "/docs/redis-advanced", icon: Zap },
        ],
      },
    ],
  },
  {
    label: "Pentest",
    icon: Target,
    subsections: [
      {
        label: "Reconnaissance",
        items: [
          { title: "Networking & Info Gathering", url: "/docs/pentest-networking", icon: Globe },
          { title: "Nmap Scanning", url: "/docs/pentest-nmap", icon: SearchIcon },
          { title: "OSINT & Reconnaissance", url: "/docs/pentest-osint", icon: Eye },
        ],
      },
      {
        label: "Exploitation",
        items: [
          { title: "Metasploit Framework", url: "/docs/pentest-metasploit", icon: Target },
          { title: "Burp Suite & Web Attack", url: "/docs/pentest-burp", icon: Globe },
          { title: "Web Attack Tools", url: "/docs/pentest-web-tools", icon: Globe },
          { title: "Password Attacks", url: "/docs/pentest-password", icon: Lock },
        ],
      },
      {
        label: "Post-Exploitation",
        items: [
          { title: "File & Payload Analysis", url: "/docs/pentest-file-analysis", icon: FileText },
          { title: "Privilege Escalation", url: "/docs/pentest-privilege", icon: Users },
        ],
      },
    ],
  },
];
