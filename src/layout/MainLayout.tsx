import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div
      className="
      min-h-screen
      pt-20 md:pt-27 lg:pt-11"
    >
      <Sidebar />
      <main className="lg:ml-[103px]">
        <Outlet />
      </main>
    </div>
  );
}
