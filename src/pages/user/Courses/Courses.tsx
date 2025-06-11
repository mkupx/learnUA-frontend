import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";

import "./Courses.scss"

const Courses = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col h-full mt-5 courses__wrapper">
        <h1 className="text-2xl text-center font-bold mb-4">Courses</h1>
        <p className="text-gray-600 text-center">This is the Courses page.</p>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
