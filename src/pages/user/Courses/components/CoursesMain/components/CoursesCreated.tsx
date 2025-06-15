import * as motion from "motion/react-client";

function CoursesMy() {
  const myCourses = [
    { id: 1, title: "Основи HTML", lessons: 10 },
    { id: 2, title: "CSS для початківців", lessons: 12 },
  ];

  return (
    <>
      <div className="mt-3">
        <div className="flex mt-4 items-center justify-between">
          <p className="text-3xl font-bold">Ваші курси ({myCourses.length})</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="btn btn-primary"
          >
            Створити курс
          </motion.button>
        </div>
        {myCourses.map((course) => (
          <div key={course.id} className="card bg-base-200 shadow-md p-4 mt-4">
            <h2 className="text-xl font-bold">{course.title}</h2>
            <p>Уроків: {course.lessons}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CoursesMy;
