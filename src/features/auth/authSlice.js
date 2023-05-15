import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI, loginUserWithGoogleAPI, registerUserWithGoogleAPI, logoutAPI, isAuthAPI } from '../../api/auth/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../utils/firebase'


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
    return rejectWithValue(error.message);
  }
})

const loginWithGoogle = createAsyncThunk('authSlice/loginWithGoogle', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
    const { data } = await loginUserWithGoogleAPI(user.accessToken);
    return data;
  } catch (err) { return rejectWithValue(err.message); }
})

const register = createAsyncThunk('authSlice/register', async ({ username, email, password }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await registerAPI(username, email, password);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }

})

const registerWithGoogle = createAsyncThunk('authSlice/registerWithGoogle', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
    const { data } = await registerUserWithGoogleAPI(user.accessToken);
    return data;
  } catch (err) { return rejectWithValue(err.message); }
})

const logout = createAsyncThunk('authSlice/logout', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await logoutAPI();
    return data;
  } catch (err) { return rejectWithValue(err.message) }
})

const isAuth = createAsyncThunk('authSlice/isAuth', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await isAuthAPI();
    return data;
  } catch (err) { return rejectWithValue(err.message) }
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

      //Login with google 
      .addCase(loginWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.user = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(loginWithGoogle.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.user = null;
      })

      //regiser
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.user = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.user = null;
      })

      //registerWithGoogle with google 
      .addCase(registerWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.user = null;
      })
      .addCase(registerWithGoogle.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(registerWithGoogle.rejected, (state, { payload }) => {
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
      })
      .addCase(isAuth.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
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
export { login, register, loginWithGoogle, registerWithGoogle, logout, isAuth };
