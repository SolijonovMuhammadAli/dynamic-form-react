import axios from "axios";

export const AUTH_PROJECT_TOKEN = "@auth_project_token";
export const BASE_URL = process.env.REACT_APP_BASE_URL;

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = false;

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axios;
