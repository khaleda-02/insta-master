import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: null,
};

const tempPostSlice = createSlice({
  name: 'tempPostSlice',
  initialState,
  reducers: {
    setPost: (state, { payload }) => {
      console.log(payload, 'before setPost');
      state.post = { ...payload };
      console.log(state.post, 'state after setPost');
      console.log(state.post.caption, 'caption after setPost');
    },
    resetPost: (state, { payload }) => {
      console.log(payload, 'before resetPost');
      state.post = null;
      console.log(payload, 'state after resetPost');
    }
  }
})

export default tempPostSlice.reducer;
export const { setPost, resetPost } = tempPostSlice.actions; 