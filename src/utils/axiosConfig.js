import axios from "axios";
import { BASE_URL } from "./environment";

// Create an Axios instance with the base URL
const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
