import { useBoolean } from "@chakra-ui/react";
import { createContext, useState } from "react";
import { IList, IUserContext } from "../../interface";

const UserContext = createContext<IUserContext | null>(null);
UserContext.displayName = "UserContext";

const UserProvider: React.FC = ({ children }) => {
  const [lists, setLists] = useState<IList[] | []>([]);
  const [navState, setNavState] = useBoolean(false);
  const [activeList, setActiveList] = useState<IList>();

  const value = {
    lists,
    setLists,
    navState,
    setNavState,
    activeList,
    setActiveList,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
