import fetch from "lib/fetch";

export const propertiesGroupRest = {
  getPropertyGroups: (param) => fetch.getApi("/properties-group", param),
  getPropertyGroup: (id) => fetch.getApi(`/properties-group/${id}`),
  deletePropertyGroup: (id) => fetch.deleteApi(`/properties-group/${id}`),
  putPropertyGroup: (id, data) => fetch.putApi(`/properties-group/${id}`, data),
  postPropertyGroup: (data) => fetch.postApi("/properties-group", data),
};
