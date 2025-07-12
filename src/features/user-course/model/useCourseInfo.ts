import { useEffect, useState } from "react";
import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";

type courseInfoType = {
   title: string;
   description: string;
   sections: {
      lessons: { title: string }[];
      id: number | null;
      title: string | null;
   }[];
} | null;

function useCourseInfo() {
   const axiosPrivate = useAxiosPrivate();
   const [courseInfo, setCourseInfo] = useState<courseInfoType>(null);
   const [error, setError] = useState<string | null>(null);
   const [isLoading, setIsLoading] = useState<boolean | null>(null);

   useEffect(() => {
      setIsLoading(true);
      console.log(isLoading);

      const pathParts = window.location.pathname.split("/");
      const courseId: string = pathParts[pathParts.length - 1];
      axiosPrivate.get(`/api/course/${courseId}`)
         .then((response) => {
            if (response.data) {
               setCourseInfo(response.data);
            }
         }).catch((error) => {
            if (error.response) {
               setError("Не вдалося завантажити інформацію про курс, спробуйте пізніше.");
            }
         })
         .finally(() => {
            setIsLoading(false);
         });;
      console.log(isLoading);
   }, []);

   return { courseInfo, error, isLoading };
}

export default useCourseInfo;