import { useEffect, useState } from "react";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import React from "react";

function useCoursesCreated() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState<string>("");
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const csrfToken: string | undefined = document.cookie.match(/csrf_access_token=([^;]+)/)?.[1];
    axiosPrivate
      .get("/api/user/created-courses", {
        headers: { "X-CSRF-TOKEN": csrfToken },
      })
      .then((response) => {
        if (response.status === 200) {
          setCourses(response.data.created_courses);
        } else {
            setError("Не вдалося завантажити курси, спробуйте ще раз");
        }
      })
      .catch((error) => {
        if (error) {
          setError("Не вдалося завантажити курси, спробуйте ще раз");
        }
      });
  }, [axiosPrivate]);


  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;

  const totalPages: number = Math.ceil(courses.length / itemsPerPage);

  const paginatedCourses = React.useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return courses.slice(start, start + itemsPerPage);
  }, [courses, currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };


  return { error, courses, paginatedCourses, handleNextPage, handlePrevPage, currentPage, totalPages };
}

export default useCoursesCreated;
