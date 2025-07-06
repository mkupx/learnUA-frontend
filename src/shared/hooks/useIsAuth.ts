import { useEffect } from "react";
import useAxiosPrivate from "./useAxiosPrivate";
import { useAuth } from "@/features/auth/model/useAuth";

const useIsAuth = () => {
    const axiosPrivate = useAxiosPrivate();
    const { login, logout } = useAuth();

    useEffect(() => {
        axiosPrivate
            .get("/api/auth/is-authorized")
            .then((response) => {
                if (response.status === 200) {
                    login();
                }
                else {
                    logout();
                }
            })
            .catch(() => {
                logout();
            });
        return () => {
        };
    }, []);

};

export default useIsAuth;

