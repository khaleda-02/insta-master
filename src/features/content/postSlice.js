import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPostAPI, deletePostAPI, getPostsAPI, updatePostAPI, getPostsByDayAPI } from '../../api/content/post'


const initialState = {
  posts: [], error: null, isLoading: false,
}

const createPost = createAsyncThunk('postSlice/createPost', async ({ title, timeToShare }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    console.log('in post slice create fun');
    const { data } = await createPostAPI(title, timeToShare);
    return data.data;
  } catch (err) {
    if (err.response.data.message) return rejectWithValue(err.response.data.message);
    return rejectWithValue(err.message);
  }
})

//! update post thunk
const updatePost = createAsyncThunk('postSlice/updatePost', async ({ caption, postId }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await updatePostAPI(caption, postId);
    return data.data;
  } catch (err) {
    if (err.response.data.message) return rejectWithValue(err.response.data.message);
    return rejectWithValue(err.message);
  }
})

//! thunk for get post
const getPosts = createAsyncThunk('postSlice/getPosts', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await getPostsAPI();
    return data.data
  } catch (err) {
    if (err.response.data.message) return rejectWithValue(err.response.data.message);
    return rejectWithValue(err.message);
  }
})

const getPostsByDay = createAsyncThunk('postSlice/getPostsByDay', async (payload, thunkAPI) => {
  const { date } = payload;
  const { rejectWithValue } = thunkAPI;

  try {
    const { data } = await getPostsByDayAPI(date);
    console.log(data);
    return data.data;
  } catch (err) {
    console.log(err);
    if (err.response?.data?.message) {
      return rejectWithValue(err.response.data.message);
    }
    return rejectWithValue(err.message);
  }
});


//! delete post thunk 
const deletePost = createAsyncThunk('postSlice/deletePost', async ({ postId }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await deletePostAPI(postId);
    return data.data;
  } catch (err) {
    if (err.response.data.message) return rejectWithValue(err.response.data.message);
    return rejectWithValue(err.message);
  }
})

const postSlice = createSlice({
  name: 'postSlice', initialState, reducers: {}, extraReducers: (builder) => {
    builder
      // create post cases
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.posts.push(payload);
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


      // getPostsByDay post cases  
      .addCase(getPostsByDay.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPostsByDay.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getPostsByDay.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
  }
})

export default postSlice.reducer;
export { createPost, updatePost, getPosts, deletePost, getPostsByDay };