import React from "react";
import { MainLayout, AdminLayout } from "layouts";

import { routerAdmin } from "./routerAdmin";
import { routerMain } from "./routerMain";

const routerLayout = [
  { component: <MainLayout />, path: "/", routes: routerMain },
  { component: <AdminLayout />, path: "/admin", routes: routerAdmin },
].map((i, key) => ({ ...i, key }));

export { routerLayout };
