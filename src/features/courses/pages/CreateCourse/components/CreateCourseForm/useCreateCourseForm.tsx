import { useState } from "react";
import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

function useCreateCourseForm() {
  const axiosPrivate = useAxiosPrivate();


  const [erroR, setError] = useState<string>("");
    const navigate = useNavigate();

  const createCourse = (data: { title: string; description: string }) => {
    const csrfToken: string | undefined = document.cookie.match(/csrf_access_token=([^;]+)/)?.[1];

    axiosPrivate
      .post<{ status: number; msg: string }>(
      "/api/course/",
      {
        description: data.description,
        title: data.title,
      },
      {
        headers: { "X-CSRF-TOKEN": csrfToken },
      }
      )
      .then((response) => {
      console.error(response);
      if (response.data.msg === "Course created successfully") {
        navigate("/courses/userCourses");
      }
      })
      .catch((error: any) => {
      if (error?.response?.data?.msg === "Course title must be unique") {
        setError("Назва курсу повинна бути унікальною");
      } else {
        setError("Сталася помилка при створенні курсу, спробуйте ще раз");
      }
      });
  };

  return {
    createCourse,
    erroR,
  };
}

export default useCreateCourseForm;
