import fetch from "lib/fetch";

export const propertiesGroupRest = {
  get: (param) => fetch.getApi("/properties-group", param),
  getId: (id) => fetch.getApi(`/properties-group/${id}`),
  delete: (id) => fetch.deleteApi(`/properties-group/${id}`),
  put: (id, data) => fetch.putApi(`/properties-group/${id}`, data),
  post: (data) => fetch.postApi("/properties-group", data),
};
