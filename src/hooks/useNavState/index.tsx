import { useContext, useDebugValue } from "react";
import { UserContext } from "../../context/userContext";
import { IUseNavState } from "../../interface";

export const useNavState = () => {
  useDebugValue("useNavState");
  const context = useContext(UserContext);

  if (context === null)
    throw new Error("useNavState must be used inside a <UserProvider/>");

  return context as IUseNavState;
};
