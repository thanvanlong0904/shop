
import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:3001/", // đổi theo backend của bạn
  headers: {
    "Content-Type": "application/json",
  },
});