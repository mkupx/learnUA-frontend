import { Routes, Route } from "react-router-dom";
import Home from "../pages/common/Home/Home";
import Login from "../pages/common/Login/Login";
import Register from "../pages/common/Register/Register";

import Profile from "../pages/user/Profile/Profile";
import Settings from "../pages/user/Settings/Settings";
import Courses from "../pages/user/Courses/Courses";

import PrivateRoute from "./PrivateRoute";
import CreateCourse from "../pages/user/Courses/pages/CreateCourse/CreateCourse";
import UserCourses from "../pages/user/Courses/pages/userCourses/userCourses";

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
      path: "/courses/*",
      element: (
        <PrivateRoute>
          <Courses />
        </PrivateRoute>
      ),
      children: [
        {
          path: "createcourse",
          element: (
            <PrivateRoute>
              <CreateCourse />
            </PrivateRoute>
          ),
        },
        {
          path: "userCourses",
          element: (
            <PrivateRoute>
              <UserCourses />
            </PrivateRoute>
          ),
        },
      ],
    },
  ];

  const renderRoutes = (routes: any[]) =>
    routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ));

  return (
    <Routes>
      {renderRoutes(navigationRoutes)}
    </Routes>
  );
};

export default AppRoutes;
