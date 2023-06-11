import axios from "axios";

export const customAxios = axios.create({
  baseURL:
    typeof window === "undefined"
      ? "http://backend:8000"
      : "http://localhost:8000",
  withCredentials: true,
});
