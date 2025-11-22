import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Container from "./Container";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#f8f8fb]">
      <Sidebar />

      <main className="lg:ml-[103px]">
        <Container className="bg-slate-500">{children}</Container>
      </main>
    </div>
  );
}
