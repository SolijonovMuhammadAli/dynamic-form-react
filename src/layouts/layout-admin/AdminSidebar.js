import React from "react";
import { NavLink } from "react-router-dom";
import { adminLinks } from "./adminLinks";

function AdminSidebar() {
  return (
    <div className="flex gap-4">
      {adminLinks.map(({ key, title, to }) => (
        <NavLink key={key} to={to} className="block bg-slate-400 mb-1 p-1">
          {title}
        </NavLink>
      ))}
    </div>
  );
}

export default AdminSidebar;
