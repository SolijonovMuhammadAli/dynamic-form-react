import React from "react";
import { Routes, Route } from "react-router-dom";
import { routerLayout } from "./routers";
import ErrorPage from "pages/ErrorPage";

function Router() {
  return (
    <Routes>
      {routerLayout.map(({ routes, path, component, key }) => (
        <Route key={key} path={path} element={component}>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={route.component}
            />
          ))}
        </Route>
      ))}
      <Route path="*" element={<ErrorPage />} />
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
}

export default Router;
