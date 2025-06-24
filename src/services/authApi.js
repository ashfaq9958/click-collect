import { postRequest } from "../utils/httpRequests";

const BASE_API = "api";

export const signUpAPI = (data) => postRequest(`${BASE_API}/signup`, data);
export const signInAPI = (data) => postRequest(`${BASE_API}/login`, data);
