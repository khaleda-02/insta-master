import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import tempPostSlice from "../features/content/tempPostSlice";
import postsSlice from "../features/content/postsSlice";
import postSlice from "../features/content/postSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    tempPost: tempPostSlice,
    posts: postsSlice,
    post: postSlice
  }
});
export default store; 