import { useEffect, useState } from "react";

function useCreatedCourseId() {
    const [id, setId] = useState<string | undefined>();

    useEffect(() => {
        const pathParts = window.location.pathname.split('/');
        const courseId = pathParts[pathParts.length - 1];
        setId(courseId);
    }, [])

    return id;
}

export default useCreatedCourseId;