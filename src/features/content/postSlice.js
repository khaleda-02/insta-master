import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPostAPI, updatePostAPI } from '../../api/content/post'

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
}

// thunk for get all user posts 

//! thunk for create post
const createPost = createAsyncThunk('postSlice/createPost', async ({ title, timeToShare }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await createPostAPI(title, timeToShare);
    console.log(data);
    return data.data;
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

//! thunk for update post
const updatePost = createAsyncThunk('postSlice/updatePost', async ({ _ }, thunkAPI) => {
  // postId, caption, hashtags
  const { rejectWithValues } = thunkAPI;
  try {
    console.log('in updatePost thunkAPI');
    // const { data } = await updatePo+stAPI();
    setTimeout(() => {
      logger.info('testing ');
    }, 5000);
    return data.data;
  } catch (err) { return rejectWithValues(err.message); }
})




// thunk for update post 
// thunk for delete post 

const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create post cases
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log("payload",payload);
        // state.posts.push(payload);
      })
      .addCase(createPost.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // update post cases
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, { payload }) => {  
        state.isLoading = false;
        // const post = state.posts.find(post => post.id === payload.id);
        // state.posts.map(post => {
        //   if (post.id === payload.id) {
        //     return payload;
        //   }
        //   return post;
        // })

      })
      .addCase(updatePost.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
  }
})

export default postSlice.reducer;
export { createPost, updatePost };