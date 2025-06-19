import { Outlet } from "react-router-dom";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

import "./Courses.scss";

const Courses = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Courses;
