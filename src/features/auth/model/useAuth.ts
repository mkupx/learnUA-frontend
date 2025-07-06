import { useContext } from "react";
import { AuthContext } from "@/app/providers/AuthProvider";

type AuthContextType = {
  isAuth: boolean | null;
  login: () => void;
  logout: () => void;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
