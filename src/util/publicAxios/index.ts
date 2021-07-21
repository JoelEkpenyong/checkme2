import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
};

export const publicAxios: AxiosInstance = axios.create(config);
