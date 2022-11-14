import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Saved",
    path: "/saved",
    icon: <AiIcons.AiFillBook />,
    cName: "nav-text"
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <AiIcons.AiOutlineUser />,
    cName: "nav-text"
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <AiIcons.AiFillSetting />,
    cName: "nav-text"
  },
  {
    title: "LogOut",
    path: "/",
    icon: <AiIcons.AiFillSetting />,
    cName: "nav-text"
  }
];
