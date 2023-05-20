import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: {},
};

const tempPostSlice = createSlice({
  name: 'tempPostSlice',
  initialState,
  reducers: {
    setPost: (state, { payload }) => {
      state.post = { ...payload };
    },
    resetPost: (state, { payload }) => {
      state.post = {};
    }
  }
})

export default tempPostSlice.reducer;
export const { setPost, resetPost } = tempPostSlice.actions; 