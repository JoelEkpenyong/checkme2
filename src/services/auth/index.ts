import { publicAxios } from "../../util/publicAxios";

export const loginUser = (payload: { email: string; password: string }) => {
  return publicAxios.post("/auth/login", payload);
};

export const registerUser = (payload: {
  email: string;
  fullname: string;
  password: string;
}) => {
  return publicAxios.post("/auth/register", payload);
};

export const isAuthenticated: () => boolean = () => {
  let auth_token = localStorage.getItem("auth_token");
  return auth_token ? true : false;
};
