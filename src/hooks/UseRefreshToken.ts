import { axiosPrivate } from "../api/axios";

const useRefreshToken = () => {

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
            );
        } catch (error) {
            console.error("Failed to refresh token:", error);
            throw error;
        }
    };

    return refresh;
}

export default useRefreshToken;