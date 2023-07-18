import Home from "pages/Home";

const routerMain = [
  {
    component: <Home />,
    path: "/",
  },
].map((i, key) => ({
  ...i,
  key,
}));

export { routerMain };
