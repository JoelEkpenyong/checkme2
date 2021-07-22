import { useContext, useDebugValue } from "react";
import { UserContext } from "../../context/userContext";
import { IUseListHook } from "../../interface";

export const useList = () => {
  useDebugValue("useList");
  const context = useContext(UserContext);

  if (context === null)
    throw new Error("useList must be used inside a <UserContext />");

  return context as IUseListHook;
};
