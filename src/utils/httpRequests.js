import axiosConfig from "./axiosConfig";
import { ACCESS_TOKEN_KEY } from "./environment";

export const getRequest = async (url) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await axiosConfig.get(url, { headers });

  return res.data;
};

export const postRequest = async (url, data) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await axiosConfig.post(url, data, { headers });

  return res.data;
};
