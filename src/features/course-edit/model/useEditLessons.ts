import { useState } from "react";
import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";

type editLessonsFormType = {
    title: string;
    section_id: number;
}

function useEditLessons() {
    const axiosPrivate = useAxiosPrivate();
    const params = useParams();

    const course_id: string | undefined = params.id;

    const [values, setValues] = useState<editLessonsFormType>({
        title: "",
        section_id: 0,
    });
    const [error, setError] = useState<string>("");


    const createLesson = (values: editLessonsFormType) => {
        const csrfToken: string | undefined = document.cookie.match(/csrf_access_token=([^;]+)/)?.[1];

        setValues(values);
        axiosPrivate.post(`/api/lesson/?course_id=${course_id}&section_place=${values.section_id}`, {title: values.title}, {
            headers: {
                "X-CSRF-TOKEN": csrfToken,
            },
        }).then((response) => {
            if(response.status === 201) {
                setError("");
                window.location.reload();
            }
        }).catch((error) => {
            if(error.response.data.msg === "Title must be unique") {
                setError("Урок з такою назвою вже існує");
            }
        })
    };

    return {
        values,
        createLesson,
        course_id,
        lessonsError: error
    };
}

export default useEditLessons;