import { Routes, Route } from "react-router-dom";
import Home from "@/pages/HomePage";

import Login from "@/pages/auth/LoginPage";
import Register from "@/pages/auth/RegisterPage";

import Profile from "@/pages/ProfilePage";
import Settings from "@/pages/SettingsPage";

import PrivateRoute from "./PrivateRoute";

import Courses from "@/pages/courses/CoursesPage";
import CreateCourse from "@/pages/CreateCoursePage";
import UserCourses from "@/pages/courses/UserCoursesPage";
import CreatedCoursePage from "@/pages/UserCoursePage";
import EditCourse from "@/pages/edit-courses/EditCoursePage";
import EditCourseInfo from "@/pages/edit-courses/EditCourseInfoPage";
import EditSections from "@/pages/edit-courses/EditSectionsPage";
import EditLessons from "@/pages/edit-courses/EditLessonsPage";

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
        {
          path: "lessons",
          element: (
            <PrivateRoute>
              <EditLessons />
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
