import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Saved",
    path: "/saved",
    icon: <FaIcons.FaBookmark />,
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
    path: "/settings",
    icon: <AiIcons.AiFillSetting />,
    cName: "nav-text"
  }
];
