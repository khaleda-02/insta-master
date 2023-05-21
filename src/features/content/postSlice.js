import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPostAPI, deletePostAPI, getPostsAPI, updatePostAPI } from '../../api/content/post'

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
}

const thunkHandler = (apiCallingFun, args) => async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await apiCallingFun(...args);
    return data.data;
  } catch (err) {
    if (error.response.data.message)
      return rejectWithValue(error.response.data.message);
    return rejectWithValue(error.message);
  }
}
// const createPost = createAsyncThunk('postSlice/createPost', thunkHandler(createPostAPI, { title, timeToShare }))
//! thunk for create post
const createPost = createAsyncThunk('postSlice/createPost', async ({ title, timeToShare }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await createPostAPI(title, timeToShare);
    return data.data;
  } catch (err) {
    if (error.response.data.message)
      return rejectWithValue(error.response.data.message);
    return rejectWithValue(error.message);
  }
})

//! update post thunk
const updatePost = createAsyncThunk('postSlice/updatePost', async ({ caption, postId }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await updatePostAPI(caption, postId);
    return data.data;
  } catch (err) {
    if (error.response.data.message)
      return rejectWithValue(error.response.data.message);
    return rejectWithValue(error.message);
  }
})

//! thunk for get post
const getPosts = createAsyncThunk('postSlice/getPosts', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await getPostsAPI();
    return data.data
  } catch (err) {
    if (error.response.data.message)
      return rejectWithValue(error.response.data.message);
    return rejectWithValue(error.message);
  }
})

//! delete post thunk 
const deletePost = createAsyncThunk('postSlice/deletePost', async ({ postId }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    console.log('in updatePost thunkAPI');
    // const { data } = await updatePostAPI();
    setTimeout(() => {
      logger.info('testing ');
    }, 5000);
    return data.data;
  } catch (err) {
    if (error.response.data.message)
      return rejectWithValue(error.response.data.message);
    return rejectWithValue(error.message);
  }
})

const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create post cases
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        // state.posts.push(payload);
      })
      .addCase(createPost.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // update post cases
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }).addCase(updatePost.fulfilled, (state, { payload }) => {
        //payload is a post object (db naming) .
        state.isLoading = false;
        state.error = null;
        state.posts = state.posts.map(post => {
          if (post._id == payload._id) {
            return payload;
          }
          return post;
        })

      })
      .addCase(updatePost.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // get user post cases
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.posts = [...payload];
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // delete post cases  
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.posts = state.posts.filter(post => post._id != payload._id);
      })
      .addCase(deletePost.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
  }
})

export default postSlice.reducer;
export { createPost, updatePost, getPosts, deletePost };