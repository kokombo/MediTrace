import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorResponse, User } from "../../../type";
import axios from "axios";

const BASE_URL = "https://meditrace.onrender.com/api/v1/auth";

type InitialState = {
  data: any;
  status: "idle" | "loading" | "success" | "failed";
  error: string | null;
};

type EmailVerificationData = {
  otp: string;
  email: string;
};

const initialState: InitialState = {
  data: null,
  status: "idle",
  error: null,
};

export const verifyEmail = createAsyncThunk(
  "verification/verifyEmail",
  async (verificationDetails: EmailVerificationData, { rejectWithValue }) => {
    return axios
      .post(`${BASE_URL}/confirm_otp`, verificationDetails)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          const errorResponse: ErrorResponse = error.response.data;
          return rejectWithValue(
            errorResponse.message || "Something went wrong, please try again"
          );
        } else {
          return rejectWithValue("Something went wrong, please try again");
        }
      });
  }
);

export const resendOTP = createAsyncThunk(
  "verification/resendOTP",
  async (email: { email: string }, { rejectWithValue }) => {
    return axios
      .post(`${BASE_URL}/resend_otp`, email)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          const errorResponse: ErrorResponse = error.response.data;
          return rejectWithValue(
            errorResponse.message || "Something went wrong, please try again"
          );
        } else {
          return rejectWithValue("Something went wrong, please try again");
        }
      });
  }
);

const verifyEmailSlice = createSlice({
  name: "verification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyEmail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(resendOTP.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(resendOTP.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default verifyEmailSlice.reducer;
