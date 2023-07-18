import React, { Fragment } from "react";
import MainNavbar from "./MainNavbar";
import MainContainer from "./MainContainer";

function MainLayout() {
  return (
    <Fragment>
      <MainNavbar />
      <MainContainer />
    </Fragment>
  );
}

export default MainLayout;
