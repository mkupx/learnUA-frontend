import React, { createContext, useState, useContext } from "react";

type AuthContextType = {
  isAuth: boolean | null;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
 

  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

  return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>;
};


export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
