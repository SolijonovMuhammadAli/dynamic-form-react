import React, { Fragment } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminContainer from "./AdminContainer";

function AdminLayout() {
  return (
    <Fragment>
      <AdminSidebar />
      <AdminContainer />
    </Fragment>
  );
}

export default AdminLayout;
