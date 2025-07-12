import { useEffect, useState } from "react";
import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";
import type { courseType } from "./types";


function useGetCourse(course_id: string | undefined) {
    const axiosPrivate = useAxiosPrivate();

    const [error, setError] = useState<string>("")
    const [course, setCourse] = useState<courseType>();

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

    if (course_id === undefined) {
        return {
            course: null,
            error: "Курс не знайдено"
        }
    } else {
        return {
            course,
            error
        }
    }
}

export default useGetCourse;