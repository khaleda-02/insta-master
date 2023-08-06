import Cookies from "js-cookie";
import api from "../client";

const loginAPI = async (email, password) => {
  return await api.post("/api/auth/login", { email, password });
};
const registerAPI = async (username, email, password) => {
  return await api.post("/api/auth/register", { username, email, password });
};
const logoutAPI = async () => {
  return await api.get("/api/auth/logout");
};
const isAuthAPI = async () => {
  return await api.get("/api/auth/isauth", {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
};

export { loginAPI, registerAPI, logoutAPI, isAuthAPI };
