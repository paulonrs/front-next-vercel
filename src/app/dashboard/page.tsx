"use client";

import { usePathname } from "next/navigation";
import UsersPage from "../users/page";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";

import { useIsMobile } from "@/hooks/use-mobile";

export default function DashboardPage() {
  const pathname = usePathname();

  let componentToRender;

  switch (pathname) {
    case "/dashboard":
      componentToRender = <UsersPage />;
      break;
    default:
      componentToRender = <div>Página não encontrada</div>;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <>
          {useIsMobile() && (
            <header className="flex h-8 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
              </div>
            </header>
          )}
        </>
        <div className="flex flex-1 flex-col gap-4 pl-4 pt-2">
          {componentToRender}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
