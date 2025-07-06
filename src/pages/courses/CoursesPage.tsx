import { Outlet } from "react-router-dom";
import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";

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
