import axios from "axios";
import { useUser } from "../../hooks/useUser";

export const AuthAxios = () => {
  const user = useUser();

  const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${user?.user.token}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
