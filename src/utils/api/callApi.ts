import type { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import axiosClient from "axios";

import { onLogout, onPayment } from "@/modules/auth/utils/helpers";

import { getAccessToken } from "../auth/helpers";
import getRuntimeEnv from "../env";

const instance = axiosClient.create({
  baseURL: getRuntimeEnv("API_URL"),
  headers: {
    "content-type": "application/json",
    accept: "application/json",
    source: "webv3",
  },
});

/* eslint-disable no-param-reassign */
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getAccessToken();
    if (!config?.headers) {
      throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
    }
    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  // eslint-disable-next-line no-console
  (error: AxiosError) => console.error(error)
);

instance.interceptors.response.use(
  res => res.data,
  err => {
    if (err.response) {
      if (err.response.status === 401) {
        return Promise.reject(setTimeout(onLogout, 1000));
      }
      if (err.response.status === 402) {
        const path = window.location.pathname;
        if (!path || path === "/") {
          return Promise.reject(setTimeout(onPayment, 1000));
        }
      }
      return Promise.reject(err.response.data);
    }
    if (err.request) {
      return Promise.reject(err.request);
    }
    return Promise.reject(err.message);
  }
);

const axios = <T>(config: AxiosRequestConfig) => instance.request<unknown, T>(config);

export default axios;
