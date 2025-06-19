import { useState } from "react";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

function useCreateCourseForm() {
  const axiosPrivate = useAxiosPrivate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState<string>("");

  const createCourse = (data: { title: string; description: string }) => {
    setFormData(data);
    const csrfToken: string | undefined = document.cookie.match(/csrf_access_token=([^;]+)/)?.[1];

    axiosPrivate
      .post<void>(
        "/api/course/create-course",
        {
          description: formData.description,
          title: formData.title,
        },
        {
          headers: { "X-CSRF-TOKEN": csrfToken },
        }
      )
      .then((response: unknown) => {
        console.error(response);
        if (response.data.status === 200 && response.data.msg === "Course created successfully") {
          console.log("Course created successfully");
        }
      })
      .catch((error: unknown) => {
        if (error.response.data.msg === "Course title must be unique") {
          setError("Назва курсу повинна бути унікальною");
        }
      });
  };

  return {
    setFormData,
    createCourse,
    errorText: error,
  };
}

export default useCreateCourseForm;
