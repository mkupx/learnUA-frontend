import React, { createContext, useState } from "react";

type AuthContextType = {
  isAuth: boolean | null;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
 

  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

  return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>;
};