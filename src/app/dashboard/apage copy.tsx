"use client";

import { usePathname } from "next/navigation";
import UsersPage from "../users/page";

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

  return <div>{componentToRender}</div>;
}
