import Header from "../components/Header";
import { useState, useEffect } from "react";

interface Props {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: Props) {
  const [token, setToken] = useState<RegExpMatchArray | null>(null);

  useEffect(() => {
    const cookies = document.cookie;
    const tokenMatch = cookies.match(/csrf_access_token=([^;]+)/);
    setToken(tokenMatch);
  }, []);

  return (
    <>
      {token ? (
        children
      ) : (
        <>
        <Header />
          <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="w-full max-w-sm p-8 space-y-6 shadow-xl rounded-2xl bg-base-100">
              <h1 className="text-3xl font-bold text-center">Доступ заборонено</h1>
              <p className="text-center">Будь ласка, увійдіть до свого облікового запису, щоб продовжити.</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
