import { useEffect, useState } from "react";

function useCreatedCourseId() {
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        const pathParts = window.location.pathname.split('/');
        const courseId = pathParts[pathParts.length - 1];
        setId(courseId || null);
    }, [])

    return id;
}

export default useCreatedCourseId;