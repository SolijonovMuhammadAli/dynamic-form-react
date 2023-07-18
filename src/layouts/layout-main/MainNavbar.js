import React from "react";
import { NavLink } from "react-router-dom";
import { mainLinks } from "./mainLinks";

function MainNavbar() {
  return (
    <div className="flex gap-4">
      {mainLinks.map(({ key, title, to }) => (
        <NavLink key={key} to={to} className="block bg-slate-400 mb-1 p-1">
          {title}
        </NavLink>
      ))}
    </div>
  );
}

export default MainNavbar;
