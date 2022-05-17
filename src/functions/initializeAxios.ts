import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry?: boolean;
  }
}

const onRequest = (req: AxiosRequestConfig): AxiosRequestConfig => {
  return req;
};

const onRequestError = (err: AxiosError): Promise<AxiosError> => {
  return Promise.reject(err);
};

const onResponse = async (res: AxiosResponse): Promise<AxiosResponse> => {
  return res;
};

const onResponseError = async (err: AxiosError): Promise<AxiosError | AxiosResponse | undefined> => {
  const config = err.config;
  if (err.response?.status === 401) {
    if (!config._retry) {
      config._retry = true;
      try {
        return axios(config);
      } catch (e) {
        return Promise.reject(err);
      }
    }
  }
  return Promise.reject(err);
};

export const initializeAxios = () => {
  axios.interceptors.request.use(onRequest, onRequestError);
  axios.interceptors.response.use(onResponse, onResponseError);
  return axios;
};
