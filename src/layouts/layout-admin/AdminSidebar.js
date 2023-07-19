import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { adminLinks } from "./adminLinks";

function AdminSidebar() {
  return (
    <Fragment>
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium">
            {adminLinks.map(({ key, title, to, icon }) => (
              <li key={key}>
                <NavLink
                  to={to}
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
                  {icon}
                  {/* // className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" */}
                  <span className="ml-3">{title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </Fragment>
  );
}

export default AdminSidebar;
