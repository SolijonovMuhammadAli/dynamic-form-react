import { Properties, PropertyCreate } from "pages/properties";
import { Dashboard } from "pages/dashboard";
import {
  PropertiesGroups,
  PropertiesGroupCreate,
} from "pages/properties-group";

const routerAdmin = [
  { component: <Dashboard />, path: "" },
  { component: <Properties />, path: "properties" },
  { component: <PropertyCreate />, path: "property/create" },
  { component: <PropertyCreate />, path: "property/:id" },
  { component: <PropertiesGroups />, path: "properties-groups" },
  { component: <PropertiesGroupCreate />, path: "properties-groups/create" },
  { component: <PropertiesGroupCreate />, path: "properties-groups/:id" },
].map((i, key) => ({ ...i, key }));

export { routerAdmin };
