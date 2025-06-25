import { useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate";

type createSectionType = (title: string, courseID: string) => void;

function useCreateSection() {
    const axiosPrivate = useAxiosPrivate();
    const [error, setError] = useState<string | null>()


    const createSection: createSectionType = (title, courseID) => {

        const csrfToken: string | undefined = document.cookie.match(/csrf_access_token=([^;]+)/)?.[1];


        axiosPrivate.post(`/api/section/?course_id=${encodeURIComponent(courseID)}`, { title },
            {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                },
            }
        ).then((response) => {
            if(response.status === 201) {
                setError("");
                window.location.reload();
            }
            if(response.data.msg === "Title must be unique") {
                setError("Секція з такою назвою вже існує");
            }
        }).catch((error) => {
            if(error.response.data.msg === "Title must be unique") {
                setError("Секція з такою назвою вже існує");
            }
        })
    }


    return { createSection , error}
}

export default useCreateSection;