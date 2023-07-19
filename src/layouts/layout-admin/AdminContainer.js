import React from "react";
import { Outlet } from "react-router-dom";

function AdminContainer() {
  return (
    <div className="ml-64 bg-blue-100 min-h-screen  pb-4">
      <Outlet />
    </div>
  );
}

export default AdminContainer;
