import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI, logoutAPI, isAuthAPI } from '../../api/auth/auth';


const initialState = {
  user: null,
  error: null,
  isLoading: false,
}

const login = createAsyncThunk('authSlice/login', async ({ email, password }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await loginAPI(email, password);
    return data
  } catch (error) {
    if (error.response.data.message)
      return rejectWithValue(error.response.data.message);
    return rejectWithValue(error.message);
  }
})


const register = createAsyncThunk('authSlice/register', async ({ username, email, password }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await registerAPI(username, email, password);
    return data;
  } catch (error) {
    if (error.response.data.message)
      return rejectWithValue(error.response.data.message);
    return rejectWithValue(error.message);
  }

})


const logout = createAsyncThunk('authSlice/logout', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await logoutAPI();
    return data;
  } catch (err) {
    if (error.response.data.message)
      return rejectWithValue(error.response.data.message);
    return rejectWithValue(error.message);
  }
})

const isAuth = createAsyncThunk('authSlice/isAuth', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await isAuthAPI();
    return data;
  } catch (err) {
    if (error.response.data.message)
      return rejectWithValue(error.response.data.message);
    return rejectWithValue(error.message);
  }
})

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    }
  },

  extraReducers: (builder) => {
    builder
      //Login 
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.user = null;
      })

      //regiser
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.user = null;
      })

      // logout 
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.user = null;
      })
      // eslint-disable-next-line no-unused-vars
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = null;
        state.err = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.user = null;
        state.error = payload;
      })

      // isAuth 
      .addCase(isAuth.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(isAuth.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.error = null;
      })
      .addCase(isAuth.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.user = null;
        state.error = payload;
      })
  }
})

export default authSlice.reducer;
export const { reset } = authSlice.actions;
export { login, register, logout, isAuth };
