import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./UseRefreshToken";
import { useAuth } from "@/features/auth/model/useAuth";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { logout } = useAuth();

  useEffect(() => {
    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response: any) => response,
      async (error: any): Promise<any> => {
        const prevRequest = error.config as { [key: string]: any };
        const refreshToken: string | undefined = document.cookie
          .split("; ")
          .find((row: string) => row.startsWith("csrf_access_token="))
          ?.split("=")[1];

        const status: number | undefined = error?.response?.status;
        const msg: string | undefined = error?.response?.data?.msg;

        if (
          status === 401 &&
          prevRequest &&
          !prevRequest._retry &&
          refreshToken &&
          msg === 'Token has expired'
        ) {
          prevRequest._retry = true;
          try {
            await refresh();
            return axiosPrivate(prevRequest);
          } catch (refreshError) {
            logout();
            return Promise.reject(refreshError);
          }
        }

        if (status === 401 || status === 403) {
          logout();
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [refresh, logout]);


  return axiosPrivate;
};

export default useAxiosPrivate;