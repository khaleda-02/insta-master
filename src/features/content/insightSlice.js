import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getInsightsAPI } from "../../api/content/insights";

const initialState = {
  insights: {},
  error: null,
  isLoading: false,
};

const getInsights = createAsyncThunk(
  "insightSlice/getInsights",
  async (_, thunkAPI) => {
    try {
      const { data } = await getInsightsAPI();
      const followers = JSON.parse(data.data.followers);
      const following = JSON.parse(data.data.following);
      const posts = JSON.parse(data.data.posts);
      return { followers, following, posts };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const insightSlice = createSlice({
  name: "insightSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInsights.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getInsights.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.insights = { ...payload };
        state.error = null;
      })
      .addCase(getInsights.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default insightSlice.reducer;
export { getInsights };
