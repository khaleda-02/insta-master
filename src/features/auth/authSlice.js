import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAPI,
  registerAPI,
  logoutAPI,
  isAuthAPI,
} from "../../api/auth/auth";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

const login = createAsyncThunk(
  "authSlice/login",
  async ({ email, password }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await loginAPI(email, password);
      return data;
    } catch (error) {
      if (error.response.data.message)
        return rejectWithValue(error.response.data.message);
      return rejectWithValue(error.message);
    }
  },
);

const register = createAsyncThunk(
  "authSlice/register",
  async ({ username, email, password }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await registerAPI(username, email, password);
      return data;
    } catch (error) {
      if (error.response.data.message)
        return rejectWithValue(error.response.data.message);
      return rejectWithValue(error.message);
    }
  },
);

const logout = createAsyncThunk("authSlice/logout", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await logoutAPI();
    return data;
  } catch (error) {
    if (error.response.data.message)
      return rejectWithValue(error.response.data.message);
    return rejectWithValue(error.message);
  }
});

const isAuth = createAsyncThunk("authSlice/isAuth", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await isAuthAPI();
    return data;
  } catch (error) {
    if (error.response.data.message)
      return rejectWithValue(error.response.data.message);
    return rejectWithValue(error.message);
  }
});

const handleAuthAction = (builder, action) => {
  builder
    .addCase(action.pending, (state) => {
      state.isLoading = true;
      state.message = "loading";
    })
    .addCase(action.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
      state.user = payload.data;
      Cookies.set("token", payload.data.token, { expires: 7, path: "/" });
      console.log("Token is set:", Cookies.get("token"));
    })
    .addCase(action.rejected, (state, { payload }) => {
      state.user = null;
      state.isLoading = false;
      state.error = payload;
      state.message = payload;
    });
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
    resetError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    handleAuthAction(builder, login);
    handleAuthAction(builder, register);

    builder
      //! logout
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.message = "loading";
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        Cookies.remove("token", { path: "/" });
        state.isLoading = false;
        state.user = null;
        state.err = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      //! isAuth
      .addCase(isAuth.pending, (state) => {
        state.message = "loading";
        state.isLoading = true;
      })
      .addCase(isAuth.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(isAuth.rejected, (state, { payload }) => {
        state.isLoading = false;
        Cookies.remove("token", { path: "/" });
        state.user = null;
      });
  },
});

export default authSlice.reducer;
export const { resetError } = authSlice.actions;
export { login, register, logout, isAuth };
