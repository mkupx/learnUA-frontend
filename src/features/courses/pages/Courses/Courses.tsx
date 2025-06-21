import { Outlet } from "react-router-dom";
import Footer from "@/shared/components/Footer/Footer";
import Header from "@/shared/components/Header/Header";

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
