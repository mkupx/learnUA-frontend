import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./UseRefreshToken";
import { useAuth } from "../context/AuthContext";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { logout } = useAuth();

  useEffect(() => {
    const responseInterceptor = axiosPrivate.interceptors.response.use(
      response => response,
      async (error) => {
        const prevRequest = error.config;
        const refreshToken = document.cookie
          .split("; ")
          .find(row => row.startsWith("csrf_access_token="))
          ?.split("=")[1];

        const status: number = error?.response?.status;
        const msg: string = error?.response?.data?.msg;

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