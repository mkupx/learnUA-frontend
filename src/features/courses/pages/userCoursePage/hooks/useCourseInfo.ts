import { useEffect, useState } from "react";
import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";

type courseInfoType = {
   title: string;
   description: string;
   sections: [
    {
      lessons: [];
      id: number | null;
      title: string | null;
    }
  ];
}

function useCourseInfo() {
   const axiosPrivate = useAxiosPrivate();
   const [courseInfo, setCourseInfo] = useState<courseInfoType>({ title: "", description: "", sections: [{lessons: [], id: null, title: null}] });
   const [error, setError] = useState<string | null>(null);
   const [isLoading, setIsLoading] = useState<boolean | null>(null);

   useEffect(() => {
      setIsLoading(true);
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
         });
      setIsLoading(false);
   }, []);

   return { courseInfo, error, isLoading };
}

export default useCourseInfo;