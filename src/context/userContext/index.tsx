import { createContext, useState } from "react";
import { IList, IUseListHook } from "../../interface";

const UserContext = createContext<IUseListHook | null>(null);
UserContext.displayName = "UserContext";

const UserProvider: React.FC = ({ children }) => {
  const [lists, setLists] = useState<IList | {}>({});

  const value = {
    lists,
    setLists: (lists: IList) => {
      setLists(lists);
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
