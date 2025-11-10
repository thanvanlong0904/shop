
import axios from "axios";

export const http = axios.create({
  baseURL: "https://shopapi-b23d.onrender.com/", // đổi theo backend của bạn
  headers: {
    "Content-Type": "application/json",
  },
});