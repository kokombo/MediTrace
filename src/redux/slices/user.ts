import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser } from "../api";
import { User } from "../../../type";
import axios from "axios";

const BASE_URL = "https://meditrace.onrender.com/api/v1/auth";

type UserType = {
  user: User | null;
  status: "idle" | "loading" | "success" | "failed";
  error: string | null | undefined;
};

type UserRegistrationData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
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

export const createAccount = createAsyncThunk(
  "user/createAccount",
  async (userData: UserRegistrationData) => {
    const res = await axios.post(`${BASE_URL}/register`, userData);
    return res.data;
  }
);

export const signIn = createAsyncThunk(
  "user/signIn",
  async (userData: Partial<UserRegistrationData>) => {
    const res = await axios.post(`${BASE_URL}/login`, userData);
    return res.data;
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
      })
      .addCase(createAccount.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(signIn.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
