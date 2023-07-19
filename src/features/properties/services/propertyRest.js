import fetch from "lib/fetch";

export const PropertyRest = {
  get: (param) => fetch.getApi("/properties", param),
  getId: (id) => fetch.getApi(`/properties/${id}`),
  deleteId: (id) => fetch.deleteApi(`/properties/${id}`),
  put: (id, data) => fetch.putApi(`/properties/${id}`, data),
  post: (data) => fetch.postApi("/properties", data),
};
