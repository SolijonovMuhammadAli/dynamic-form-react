import axios from "axios";
// import changeType from "utils/changeType";

/*============================ base url config =================================== */
export const AUTH_PROJECT_TOKEN = "@auth_project_token";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

axios.defaults.baseURL = BASE_URL;

axios.defaults.withCredentials = false;

axios.interceptors.request.use(
  (config) => {
    // const tourflow = window.localStorage.getItem(AUTH_PROJECT_TOKEN);
    // const tokenData = changeType(tourflow);
    // config.headers = {
    //   authorization: tourflow ? `Bearer ${tokenData?.accessToken}` : "",
    // };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // const originalConfig = error?.config;
    // const responseStatus = error?.response?.status;

    // if (responseStatus === 403) {
    //   window.localStorage.removeItem(AUTH_PROJECT_TOKEN);
    //   window.location.reload();
    //   return Promise.reject(error);
    // }
    // const tourflow = window.localStorage.getItem(AUTH_PROJECT_TOKEN);
    // const tokenData = changeType(tourflow);

    // try {
    //   if (responseStatus === 401 && !originalConfig._retry) {
    //     originalConfig._retry = true;
    //     const result = await fetch(`${BASE_URL}/token/refresh`, {
    //       method: "GET",
    //       headers: {
    //         authorization: `Bearer ${tokenData?.refreshToken}`,
    //       },
    //     });

    //     const response = await result.json();
    //     if (response?.statusCode === 403) {
    //       window.localStorage.removeItem(AUTH_PROJECT_TOKEN);
    //       return Promise.reject(error);
    //     }
    //     window.localStorage.setItem(
    //       AUTH_PROJECT_TOKEN,
    //       changeType({
    //         ...tokenData,
    //         ...response,
    //       })
    //     );
    //     return axios(originalConfig);
    //   }
    // } catch (err) {
    //   return Promise.reject(err);
    // }

    return Promise.reject(error);
  }
);

export default axios;
