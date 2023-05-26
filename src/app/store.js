import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import tempPostSlice from "../features/content/tempPostSlice";
import postSlice from "../features/content/postSlice";
import insightSlice from "../features/content/insightSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    tempPost: tempPostSlice,
    post: postSlice,
    insights: insightSlice,
  },
});
export default store;
