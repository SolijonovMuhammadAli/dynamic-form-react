import React from "react";
import { Outlet } from "react-router-dom";

function MainContainer() {
  return (
    <div className="bg-slate-200 h-screen w-full">
      <Outlet />
    </div>
  );
}

export default MainContainer;
