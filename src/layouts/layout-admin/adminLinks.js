import React from "react";
import {
  BiSolidDashboard,
  BiWindow,
  BiWindows,
  BiLogOut,
} from "react-icons/bi";

const adminLinks = [
  { title: "Dashboard", to: "/admin", icon: <BiSolidDashboard /> },
  { title: "Maydonlar", to: "properties", icon: <BiWindow /> },
  { title: "Maydon guruhlari", to: "properties-groups", icon: <BiWindows /> },
  { title: "Qaytish", to: "/", icon: <BiLogOut /> },
].map((i, key) => ({ ...i, key }));

export { adminLinks };
