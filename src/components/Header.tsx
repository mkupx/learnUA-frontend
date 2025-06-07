import { useEffect } from "react";
import { Link } from "react-router-dom";
import { themeChange } from "theme-change";
import { useState } from "react";

const Header = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    const tokenMatch: string | undefined = document.cookie.match(/csrf_access_token=([^;]+)/)?.[1];
    setToken(tokenMatch);
  }, []);


  

  return (
    <>
      <header className="bg-base-100 shadow-md">
        <div className="navbar px-6 max-w-7xl m-auto">
          {/* Логотип */}
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              learnUA
            </Link>
          </div>

          {/* Кнопки */}

          <div className="flex gap-10">
            <div className="flex gap-2">
              <button className="btn" data-set-theme="mytheme" data-act-class="btn-primary">
                Світла
              </button>
              <button className="btn" data-set-theme="mydarktheme" data-act-class="btn-primary">
                Темна
              </button>
            </div>
            {token ? (
              <div className="flex gap-5">
                <Link to="/profile">
                  <button className="btn btn-primary w-42">Ваш профіль</button>
                </Link>
              </div>
            ) : (
              <div className="flex gap-5">
                <Link to="/register">
                  <button className="btn btn-primary w-42">Реєстрація</button>
                </Link>
                <Link to="/login">
                  <button className="btn btn-outline w-32">Вхід</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
