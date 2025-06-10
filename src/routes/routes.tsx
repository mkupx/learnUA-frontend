import { Routes, Route } from "react-router-dom";
import Home from "../pages/common/Home/Home";
import Login from "../pages/common/Login/Login";
import Register from "../pages/common/Register/Register";

import Profile from "../pages/user/Profile/Profile";
import Settings from "../pages/user/Settings/Settings";
import Courses from "../pages/user/Courses/Courses";

import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  const navigationRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
      path: "/profile",
      element: (
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      ),
    },
    {
      path: "/settings",
      element: (
        <PrivateRoute>
          <Settings />
        </PrivateRoute>
      ),
    },
    {
      path: "/courses",
      element: (
        <PrivateRoute>
          <Courses />
        </PrivateRoute>
      )
    }
  ];

  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
