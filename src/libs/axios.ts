import axios, { AxiosResponse } from "axios";

const axiosClient = axios.create({
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    // Prefer: "HonorNonIndexedQueriesWarningMayFailRandomly",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosClient };
