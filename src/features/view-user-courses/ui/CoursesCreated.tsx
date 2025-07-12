import * as motion from "motion/react-client";
import { Link } from "react-router-dom";
import useCoursesCreated from "../model/useCoursesCreated";

import { type courseType } from "@/entities/course/model/types";

function CoursesMy() {
  const { error, courses, paginatedCourses, handleNextPage, handlePrevPage, currentPage, totalPages } = useCoursesCreated();

  return (
    <>
      <div className="mt-3">
        <div className="flex mt-4 items-center justify-between">
          <p className="text-3xl font-bold">Ваші курси ({courses.length})</p>
          <Link to="/courses/createcourse">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2, ease: "easeOut" }} className="btn btn-primary">
              Створити курс
            </motion.button>
          </Link>
        </div>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        {paginatedCourses.map((course: courseType) => (
          <Link to={`/createdcourse/${course.id}`} key={course.id + course.title}>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer mt-6">
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-primary mb-4">{course.title}</h2>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="badge badge-secondary badge-outline">Рейтинг: {course.rating}/5.0</div>
                    <div className="badge badge-accent badge-outline">{new Date(course.created_at).toLocaleDateString("uk-UA")}</div>
                  </div>

                  <div className="card-actions">
                    <button className="btn btn-primary btn-sm">
                      Переглянути
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            <button className="btn btn-outline" onClick={handlePrevPage} disabled={currentPage === 1}>
              Назад
            </button>
            <span className="px-3 py-2">
              {currentPage} / {totalPages}
            </span>
            <button className="btn btn-outline" onClick={handleNextPage} disabled={currentPage === totalPages}>
              Вперед
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CoursesMy;
