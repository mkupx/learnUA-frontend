import { axiosPrivate } from "@/shared/api/axios";
import { useAuth } from "@/context/AuthContext";

const useRefreshToken = () => {

    const { login } = useAuth();

    const refresh = async () => {

        const csrfToken: string | undefined = document.cookie.match(/csrf_refresh_token=([^;]+)/)?.[1];

        try {
            await axiosPrivate.post("/api/auth/refresh",
                {},
                {
                    headers: {
                        "X-CSRF-TOKEN": csrfToken,
                    },
                }
            )
            .then((response) => {
                if (response.status === 200) {
                    login();
                }
            });
        } catch (error) {
            console.error("Failed to refresh token:", error);
            throw error;
        }
    };

    return refresh;
}

export default useRefreshToken;