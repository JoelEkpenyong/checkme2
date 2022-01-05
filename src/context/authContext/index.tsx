import React from 'react'
import { createContext, useState } from "react";
import { IUser } from "../../interface";

const AuthContext = createContext<{
  user: IUser;
  setUser: (value: IUser) => void;
} | null>(null);
AuthContext.displayName = "AuthContext";

const AuthProvider: React.FC = ({ children }) => {
  const author = localStorage.getItem("author");
  const [user, setUser] = useState<IUser>(
    author
      ? JSON.parse(author)
      : {
          email: "",
          id: "",
          fullname: "",
          token: "",
        }
  );

  const value = {
    user,
    setUser: (value: IUser) => {
      setUser(value);
      localStorage.setItem("author", JSON.stringify(value));
      localStorage.setItem("auth_token", value.token);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
