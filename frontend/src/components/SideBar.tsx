import { createElement, type FC } from "react";
import logo from "../assets/logo.png";
import { routes } from "../utils/routes";
import { NavLink } from "react-router-dom";

const SideBar: FC = () => {
  return (
    <aside className="bg-primary w-2xs h-screen text-2xl font-bold py-5 flex flex-col">
      <div className="text-4xl h-20 p-3 flex items-center gap-5 mb-5">
        <img src={logo} alt="logo" className="h-full" />
        EchoBrief
      </div>
      <ul className="flex flex-col gap-2 flex-1">
        {routes.map((route) => (
          <NavLink key={route.to} to={route.to}>
            <li className="aside-item">
              {createElement(route.icon)} {route.name}
            </li>
          </NavLink>
        ))}
        <div className="mt-auto flex flex-col px-3 gap-3">
          <div className="flex items-center gap-5">
            <div className="avatar">U</div>
            <div>Username</div>
          </div>
          <button>Logout</button>
        </div>
      </ul>
    </aside>
  );
};

export default SideBar;
