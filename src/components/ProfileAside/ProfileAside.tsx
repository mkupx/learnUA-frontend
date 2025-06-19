import "./ProfileAside.scss";
import * as motion from "motion/react-client";

import { Link, useLocation } from "react-router-dom";
import { LogOut, Settings, User } from "lucide-react";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../context/AuthContext";

const ProfileAside = () => {
  const location = useLocation();
  const current = location.pathname;
  const axiosPrivate = useAxiosPrivate();

  const { logout } = useAuth();

  const menuItems = [
    { name: "Профіль", to: "/profile", icon: <User size={18} /> },
    { name: "Налаштування", to: "/settings", icon: <Settings size={18} /> },
  ];

  function handleLogout() {
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
          logout();
          window.location.href = "/";
        }
      });
  }

  return (
    <aside className="profile-aside w-64 p-4 bg-base-100 rounded-xl shadow-xl">
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <motion.div
            className="w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            key={item.to}
          >
            <Link
              className={`btn w-full justify-start gap-2 ${
                current === item.to ? "btn-primary text-white" : "btn-ghost hover:bg-base-200"
              }`}
              to={item.to}
            >
              {item.icon}
              {item.name}
            </Link>
          </motion.div>
        ))}
        <motion.div
          className="w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <button
            onClick={() => {
              handleLogout();
            }}
            className="w-full btn btn-error btn-outline mt-4 justify-start gap-2"
          >
            <LogOut size={18} />
            Вийти
          </button>
        </motion.div>
      </nav>
    </aside>
  );
};

export default ProfileAside;
