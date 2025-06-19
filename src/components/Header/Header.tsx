import "./Header.scss";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { themeChange } from "theme-change";
import { useAuth } from "../../context/AuthContext";
import useIsAuth from "../../hooks/useIsAuth";

const Header = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  const { isAuth } = useAuth();
  useIsAuth();

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
              <button className="btn p-2" data-set-theme="mytheme" data-act-class="btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              </button>
              <button className="btn p-2" data-set-theme="mydarktheme" data-act-class="btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              </button>
            </div>
            {isAuth === true ? (
              <div className="flex gap-5">
                <Link to="/courses/userCourses">
                  <button className="btn btn-primary w-26">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    Курси
                  </button>
                </Link>
                <Link to="/profile">
                  <button className="btn btn-accent w-36">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Профіль
                  </button>
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
