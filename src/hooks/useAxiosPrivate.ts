import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./UseRefreshToken";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();

  useEffect(() => {
    const responseInterceptor = axiosPrivate.interceptors.response.use(
      response => response,
      async (error) => {
        const prevRequest = error.config;

        if (
          error?.response?.status === 401 &&
          prevRequest &&
          !prevRequest._retry
        ) {
          prevRequest._retry = true;
          try {
            await refresh();
            return axiosPrivate(prevRequest);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;