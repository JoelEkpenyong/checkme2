import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { IUser } from "../../interface";

export const useUser: () => {
  user: IUser;
  setUser: (value: IUser) => void;
} | null = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("useUser must be used inside a <UserProvider>");

  return context;
};
