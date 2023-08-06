import axios from "axios";
const api = axios.create({
  baseURL: "https://insta-master-back.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
