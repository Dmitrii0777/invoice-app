import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:ml-[103px]">
        <Outlet />
      </main>
    </div>
  );
}
