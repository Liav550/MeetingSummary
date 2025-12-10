import type { IconType } from "react-icons";
import { FaHistory, FaHome, FaMicrophone, FaQuestion } from "react-icons/fa";

interface RouteType {
  to: string;
  name: string;
  icon: IconType;
}

export const routes: RouteType[] = [
  {
    to: "/",
    name: "Home",
    icon: FaHome,
  },
  {
    to: "/record",
    name: "Record",
    icon: FaMicrophone,
  },
  {
    to: "/history",
    name: "History",
    icon: FaHistory,
  },
  {
    to: "/about",
    name: "About",
    icon: FaQuestion,
  },
];
