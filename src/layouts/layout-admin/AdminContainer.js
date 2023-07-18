import React from "react";
import { Outlet } from "react-router-dom";

function AdminContainer() {
  return (
    <div className="">
      <Outlet />
    </div>
  );
}

export default AdminContainer;
