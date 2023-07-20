import fetch from "lib/fetch";

export const PropertyRest = {
  getProperties: (param) => fetch.getApi("/properties", param),
  getProperty: (id) => fetch.getApi(`/properties/${id}`),
  deleteProperty: (id) => fetch.deleteApi(`/properties/${id}`),
  putProperty: (id, data) => fetch.putApi(`/properties/${id}`, data),
  postProperty: (data) => fetch.postApi("/properties", data),
};
