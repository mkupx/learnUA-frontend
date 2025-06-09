import { useState, useEffect } from "react";
import useAxiosPrivate from "./useAxiosPrivate";
import { useLoading } from "../context/LoadingContext";

const useIsAuth = () => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null);
    const axiosPrivate = useAxiosPrivate();
    const { setLoading } = useLoading();
    useEffect(() => {
        setLoading(true);
        return () => setLoading(false);
    }, [setLoading]);

    useEffect(() => {
        let isMounted = true;
        axiosPrivate
            .get("/api/auth/is-authorized")
            .then((response) => {
                if (isMounted) setIsAuth(response.status === 200);
            })
            .catch(() => {
                if (isMounted) setIsAuth(false);
            });
        return () => {
            isMounted = false;
        };
    }, []);

    return isAuth;
};

export default useIsAuth;