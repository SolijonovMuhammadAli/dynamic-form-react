import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { mainLinks } from "./mainLinks";

function MainNavbar() {
  return (
    <Fragment>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Ali
            </span>
          </Link>
          <div className="block w-auto">
            <ul className="flex font-medium p-0 border-gray-100 rounded-lg  flex-row space-x-8 mt-0 border-0 bg-white">
              {mainLinks.map(({ key, title, to }) => (
                <li key={key}>
                  <NavLink
                    to={to}
                    className="py-2 pl-3 pr-4 text-white bg-blue-700 rounded">
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default MainNavbar;
