import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";

type initialValues = {
  title: string;
  description: string;
};

function useCourseInfoForm() {
  const axiosPrivate = useAxiosPrivate();

  function getCourseIdFromPath(pathname: string) {
    const match = pathname.match(/\/courses\/editcourse\/(\d+)/);
    const courseId = match ? match[1] : "";
    return courseId;
  }

  const location = useLocation();
  const courseId = getCourseIdFromPath(location.pathname);
  const [initialValues, setInitialValues] = useState<initialValues>({
    title: "",
    description: "",
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axiosPrivate
      .get(`/api/course/${courseId}`)
      .then((response) => {
        if (response.status === 200) {
          setInitialValues({
            title: response.data.title,
            description: response.data.description,
          });
        } else {
          setError("Не вдалося завантажити дані курсу, спробуйте пізніше.");
        }
      })
      .catch((error) => {
        if (error.response) {
          setError("Не вдалося завантажити дані курсу, спробуйте пізніше.");
        }
      });
  }, [courseId, axiosPrivate]);

  const handleEditCourse = (values: { title: string; description: string }) => {
    console.log("Form submitted with values:", values);
  };

  return { courseId, initialValues, error, handleEditCourse };
}

export default useCourseInfoForm;
