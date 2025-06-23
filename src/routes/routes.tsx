import { Routes, Route } from "react-router-dom";
import Home from "../features/Home/Home";

import Login from "@/features/auth/pages/Login/Login";
import Register from "@/features/auth/pages/Register/Register";

import Profile from "../features/profile/pages/Profile/Profile";
import Settings from "../features/profile/pages/Settings/Settings";

import PrivateRoute from "./PrivateRoute";

import Courses from "../features/courses/pages/Courses/Courses";
import CreateCourse from "../features/courses/pages/CreateCourse/CreateCourse";
import UserCourses from "../features/courses/pages/userCourses/userCourses";
import CreatedCoursePage from "@/features/courses/pages/userCoursePage/userCoursePage";
import EditCourse from "@/features/courses/pages/EditCourse/EditCourse";
import EditCourseInfo from "@/features/courses/pages/EditCourse/pages/EditCourseInfo/EditCourseInfo";
import EditSections from "@/features/courses/pages/EditCourse/pages/EditSections/EditSections";

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
    {
      path: "/createdcourse/:id",
      element: (
        <PrivateRoute>
          <CreatedCoursePage />
        </PrivateRoute>
      ),
    },
    {
      path: "/courses/editcourse/:id",
      element: (
        <PrivateRoute>
          <EditCourse />
        </PrivateRoute>
      ),
      children: [
        {
          path: "info",
          element: (
            <PrivateRoute>
              <EditCourseInfo />
            </PrivateRoute>
          ),
        },
        {
          path: "sections",
          element: (
            <PrivateRoute>
              <EditSections />
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

  return <Routes>{renderRoutes(navigationRoutes)}</Routes>;
};

export default AppRoutes;
