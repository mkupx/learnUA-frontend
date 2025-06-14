function CoursesNow() {
  const enrolledCourses = [
    { id: 3, title: "JavaScript з нуля", progress: "50%" },
    { id: 4, title: "React для початківців", progress: "20%" },
  ];

  return (
    <>
      <div className="mt-3">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="card bg-base-100 shadow-md p-4 mt-4">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <progress
              className="progress progress-primary w-full mt-2"
              value={parseInt(course.progress)}
              max="100"
            ></progress>
            <p className="text-sm mt-1">Прогрес: {course.progress}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CoursesNow;
