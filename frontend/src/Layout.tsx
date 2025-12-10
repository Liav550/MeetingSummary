import type { FC } from "react";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="h-screen flex">
      <SideBar />
      <main className="flex items-center justify-center bg-secondary flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
