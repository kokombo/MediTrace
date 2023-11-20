import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser } from "../api";
import { User } from "../../../type";

type UserType = {
  user: User | null;
  status: string;
  error: unknown;
};

const initialState: UserType = {
  user: null,
  status: "idle",
  error: null,
};

export const getCurrentUserAsync = createAsyncThunk(
  "user/getCurrentUser",
  async () => {
    try {
      const res = await getCurrentUser();
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUserAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCurrentUserAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(getCurrentUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
