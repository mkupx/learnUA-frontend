import { useEffect, useState } from "react";
import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";

type courseInfoType = {
   title: string;
   description: string;
}

function useCourseInfo() {
   const axiosPrivate = useAxiosPrivate();
   const [courseInfo, setCourseInfo] = useState<courseInfoType>({ title: "", description: "" });
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const pathParts = window.location.pathname.split("/");
      const courseId: string = pathParts[pathParts.length - 1];
      axiosPrivate.get(`/api/course/${courseId}`)
         .then((response) => {
            if (response.data) {
               setCourseInfo({
                  title: response.data.title,
                  description: response.data.description
               });
            }
         }).catch((error) => {
            if (error.response) {
               setError("Не вдалося завантажити інформацію про курс, спробуйте пізніше.");
            }
         })
   }, []);

   return { courseInfo, error };
}

export default useCourseInfo;