import { useContext, useDebugValue } from "react";
import { AuthContext } from "../../context/authContext";
import { IUseUserHook } from "../../interface";

export const useUser = () => {
  useDebugValue("useUser");
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("useUser must be used inside a <UserProvider>");

  return context as IUseUserHook;
};
