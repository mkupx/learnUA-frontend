import Header from "../components/Header/Header";
import useIsAuth from "../hooks/useIsAuth";
import { useAuth } from "../context/AuthContext";
import type React from "react";
import GlobalLoader from "../components/ProfileAside/GlobalLoader";

interface Props {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: Props) {
  const { isAuth } = useAuth();
  useIsAuth();

  return (
    <>
      {isAuth === true ? (
        children
      ) : isAuth === null ? (
        <GlobalLoader />
      ) : (
        <>
          <Header />
          <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="w-full max-w-sm p-8 space-y-6 shadow-xl rounded-2xl bg-base-100">
              <h1 className="text-3xl font-bold text-center">Доступ заборонено</h1>
              <p className="text-center">
                Будь ласка, увійдіть до свого облікового запису, щоб продовжити.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
