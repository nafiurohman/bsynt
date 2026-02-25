import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { BookOpen, Bot, Heart, ChevronDown, ChevronRight } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { sections, type SidebarSection } from "@/lib/sections";

const CollapsibleSection = ({ section }: { section: SidebarSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-sidebar-accent/50 rounded-md transition-colors">
        <section.icon className="h-4 w-4 shrink-0 text-primary" />
        <span className="flex-1 text-left">{section.label}</span>
        {isOpen ? <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" /> : <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="ml-2 border-l border-border/50 pl-2">
          {section.subsections.map((sub) => (
            <SidebarGroup key={sub.label} className="py-0">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-4 pt-2 pb-1 font-semibold">{sub.label}</p>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sub.items.map((item) => (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.url}
                          className="flex items-center gap-2 px-4 py-1.5 text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 rounded-md transition-colors"
                          activeClassName="sidebar-link-active"
                        >
                          <item.icon className="h-3.5 w-3.5 shrink-0" />
                          <span className="text-xs">{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const AppSidebar = () => {
  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar-background">
      <SidebarContent className="pt-4 flex flex-col h-full">
        <div className="px-4 mb-4">
          <NavLink to="/" className="flex items-center gap-2 text-primary font-mono font-bold text-lg glow-green">
            <BookOpen className="h-5 w-5" />
            <span>BSynt</span>
          </NavLink>
        </div>

        <div className="flex-1 overflow-y-auto space-y-1">
          {sections.map((section) => (
            <CollapsibleSection key={section.label} section={section} />
          ))}

          <div className="px-2 pt-2">
            <NavLink
              to="/asisten"
              className="flex items-center gap-2 px-4 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 rounded-md transition-colors"
              activeClassName="sidebar-link-active"
            >
              <Bot className="h-4 w-4 shrink-0" />
              <span>Asisten BSynt</span>
            </NavLink>
          </div>
        </div>

        <div className="mt-auto border-t border-sidebar-border p-4">
          <a
            href="https://saweria.co/nafiurohman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2.5 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors text-sm"
          >
            <Heart className="h-4 w-4 text-destructive shrink-0" />
            <div className="min-w-0">
              <span className="font-semibold text-foreground text-xs">Dukung Kami</span>
              <p className="text-xs text-muted-foreground truncate">Bezn Project</p>
            </div>
          </a>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
