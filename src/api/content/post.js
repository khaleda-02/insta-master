import Cookies from "js-cookie";
import api from "../client";

const createPostAPI = async (title, timeToShare) => {
  return await api.post("/api/content/create-post", { title, timeToShare }, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
};
const getPostsAPI = async () => {
  return await api.get("/api/content/get-posts", {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
};
const getPostsByDayAPI = async (date) => {
  return await api.get(`/api/content/get-posts-by-day/${date}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  })
};
const getPostsByMonthAPI = async (date) => {
  return await api.get("/api/content/get-posts-by-month", { date }, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
};
const deletePostAPI = async (postId) => {
  return await api.delete(`/api/content/delete-post/${postId}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    }
    ,
  });
};
const updatePostAPI = async (caption, postId) => {
  return await api.put(`/api/content/update-post/${postId}`, { caption }, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
};

export {
  createPostAPI,
  getPostsAPI,
  getPostsByDayAPI,
  getPostsByMonthAPI,
  deletePostAPI,
  updatePostAPI,
};
