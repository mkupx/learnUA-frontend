import "./ProfileAside.scss";

import { Link, useLocation } from "react-router-dom";
import { LogOut, Settings, User } from "lucide-react";

import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

// Bell, Shield

const ProfileAside = () => {
  const location = useLocation();
  const current = location.pathname;
  const axiosPrivate = useAxiosPrivate();

  const menuItems = [
    { name: "Профіль", to: "/profile", icon: <User size={18} /> },
    { name: "Налаштування", to: "/settings", icon: <Settings size={18} /> },
    // { name: "Повідомлення", to: "/notifications", icon: <Bell size={18} /> },
    // { name: "Безпека", to: "/security", icon: <Shield size={18} /> },
  ];

  function logout() {
    const csrfToken: string | undefined = document.cookie.match(/csrf_access_token=([^;]+)/)?.[1];

    axiosPrivate
      .delete("/api/auth/logout", {
        withCredentials: true,
        headers: {
          "X-CSRF-TOKEN": csrfToken,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Ви вийшли з профілю!");
          window.location.href = "/";
        }
      });
  }

  return (
    <aside className="profile-aside w-64 p-4 bg-base-100 rounded-xl shadow-xl">
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link key={item.to} to={item.to} className={`btn justify-start gap-2 ${current === item.to ? "btn-primary text-white" : "btn-ghost hover:bg-base-200"}`}>
            {item.icon}
            {item.name}
          </Link>
        ))}
        <button
          onClick={() => {
            logout();
          }}
          className="btn btn-error btn-outline mt-4 justify-start gap-2"
        >
          <LogOut size={18} />
          Вийти
        </button>
      </nav>
    </aside>
  );
};

export default ProfileAside;
