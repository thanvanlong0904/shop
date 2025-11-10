
import axios from "axios";

export const http = axios.create({
  baseURL: "https://shopapi-production-630e.up.railway.app/", // đổi theo backend của bạn
  headers: {
    "Content-Type": "application/json",
  },
});