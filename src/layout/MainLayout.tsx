import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div
      className="
      min-h-screen bg-bg 
      pt-24 md:pt-35 lg:pt-20"
    >
      <Sidebar />
      <main className="lg:ml-[103px]">
        <Outlet />
      </main>
    </div>
  );
}
