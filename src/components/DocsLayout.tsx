import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import GlobalSearch from "./GlobalSearch";
import ThemeToggle from "./ThemeToggle";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import { TableOfContents } from "./TableOfContents";
import { Menu, Github } from "lucide-react";

interface DocsLayoutProps {
  children: React.ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 min-w-0 flex flex-col">
          <header className="sticky top-0 z-40 h-14 flex items-center gap-2 border-b border-border bg-background/80 backdrop-blur-sm px-4">
            <SidebarTrigger className="mr-1">
              <Menu className="h-5 w-5" />
            </SidebarTrigger>
            <GlobalSearch />
            <div className="ml-auto flex items-center gap-2">
              <a
                href="https://github.com/nafiurohman/bsynt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent rounded-md transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </a>
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 max-w-7xl w-full flex gap-4 lg:gap-6">
            <div className="flex-1 min-w-0 w-full">
              {children}
            </div>
            <TableOfContents />
          </main>
          <Footer />
        </div>
      </div>
      <BackToTop />
    </SidebarProvider>
  );
};

export default DocsLayout;
