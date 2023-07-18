const adminLinks = [
  {
    title: "Bosh sahifa",
    to: "/",
  },
  {
    title: "Dashboard",
    to: "/admin",
  },
  {
    title: "Maydonlar",
    to: "properties",
  },
  {
    title: "Maydon guruhlari",
    to: "properties-groups",
  },
].map((i, key) => ({ ...i, key }));

export { adminLinks };
