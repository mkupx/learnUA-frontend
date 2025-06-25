import { useEffect, useState } from "react";
import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";


function useGetCourse(course_id: string | undefined) {
    const axiosPrivate = useAxiosPrivate();

    const [error, setError] = useState<string>("")
    const [course, setCourse] = useState<any>(null);

    useEffect(() => {
        axiosPrivate.get(`/api/course/${course_id}`).then((response) => {
            if(response.status === 200) {
                setCourse(response.data);
                setError("");
            }
        }).catch((error) => {
            if(error) {
                setError("Сталася помилка при завантаженні курсу, спробуйте пізніше")
            }
        })
    }, []);

    return {course, error}
}

export default useGetCourse;