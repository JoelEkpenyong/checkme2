import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const authToken = localStorage.getItem("auth_token");

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
};

const authAxios: AxiosInstance = axios.create(config);

authAxios.interceptors.request.use(
  (config) => {
    config.headers["auth-token"] = `${authToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { authAxios };
