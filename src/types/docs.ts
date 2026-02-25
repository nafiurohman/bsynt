export interface CommandOption {
  option: string;
  description: string;
}

export interface Command {
  name: string;
  title: string;
  description: string;
  syntax: string;
  options: CommandOption[];
  examples: string;
  notes?: string;
  warning?: string;
}

export interface DocsPage {
  id: string;
  title: string;
  description: string;
  badge?: string;
  commands: Command[];
}

export interface NavItem {
  id: string;
  title: string;
  description: string;
  commands: string[];
  badge?: string;
}

export interface AuthConfig {
  username: string;
  password: string;
}
