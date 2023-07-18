import React from "react";
import { Outlet } from "react-router-dom";

function MainContainer() {
  return (
    <div className="">
      <Outlet />
    </div>
  );
}

export default MainContainer;
