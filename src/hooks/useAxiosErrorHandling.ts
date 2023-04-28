import { useEffect } from 'react';
import axios, { AxiosError } from 'axios';

type UseAxiosErrorHandling = (handleError: (error: AxiosError) => void) => void;

const useAxiosErrorHandling: UseAxiosErrorHandling = (handleError) => {
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      undefined,
      (error: AxiosError) => {
        handleError(error);
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [handleError]);
};

export { useAxiosErrorHandling };
