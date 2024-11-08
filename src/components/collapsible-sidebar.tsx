"use client";

import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useRef } from "react";

export function CollapsibleSidebar() {
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleButtonClick = () => {
    triggerRef.current?.click();
  };
  return (
    <SidebarGroup>
      <SidebarMenu>
        <Collapsible asChild defaultOpen={true} className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <div className="flex items-center gap-2">
                <SidebarTrigger ref={triggerRef} />
                <SidebarMenuButton
                  tooltip="Collapse Sidebar"
                  onClick={handleButtonClick}
                >
                  <span>Collapse Sidebar</span>
                </SidebarMenuButton>
              </div>
            </CollapsibleTrigger>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
}
