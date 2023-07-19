import axios from "lib/axios";

const api = {
  getApi: async (url, params = {}) => await axios.get(url, { params }),
  postApi: async (url, data) => await axios.post(url, data),
  putApi: async (url, data) => await axios.put(url, data),
  deleteApi: async (url) => await axios.delete(url),
};
export default api;
