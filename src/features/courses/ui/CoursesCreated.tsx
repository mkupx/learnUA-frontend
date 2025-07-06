import * as motion from "motion/react-client";
import { Link } from "react-router-dom";
import useCoursesCreated from "../model/useCoursesCreated";

import { type courseType } from "../model/types";

function CoursesMy() {
  const { error, courses, paginatedCourses, handleNextPage, handlePrevPage, currentPage, totalPages } = useCoursesCreated();

  return (
    <>
      <div className="mt-3">
        <div className="flex mt-4 items-center justify-between">
          <p className="text-3xl font-bold">Ваші курси ({courses.length})</p>
          <Link to="/courses/createcourse">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="btn btn-primary"
            >
              Створити курс
            </motion.button>
          </Link>
        </div>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        {paginatedCourses.map((course: courseType) => (
          <Link to={`/createdcourse/${course.id}`} key={course.id + course.title}>
            <div key={course.title} className="card bg-base-200 shadow-md p-4 mt-4">
            <h2 className="text-xl font-bold">{course.title}</h2>
          </div>
          </Link>
        ))}

        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            <button
              className="btn btn-outline"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Назад
            </button>
            <span className="px-3 py-2">
              {currentPage} / {totalPages}
            </span>
            <button
              className="btn btn-outline"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Вперед
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CoursesMy;
