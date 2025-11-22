import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div
      className="
      min-h-screen bg-bg 
      pt-24 md:pt-35 lg:pt-20"
    >
      <Sidebar />
      <main className="lg:ml-[103px]">{children}</main>
    </div>
  );
}
