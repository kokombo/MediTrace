import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorResponse } from "../../../type";
import axios from "axios";

const BASE_URL = "https://meditrace.onrender.com/api/v1/auth";

type InitialState = {
  data: any;
  status: {
    verifyEmail: "idle" | "loading" | "success" | "failed";
    resendOTP: "idle" | "loading" | "success" | "failed";
  };
  error: {
    verifyEmailError: string | null;
    resendOTPError: string | null;
  };
};

type EmailVerificationData = {
  otp: string;
  email: string;
};

const initialState: InitialState = {
  data: null,
  status: {
    verifyEmail: "idle",
    resendOTP: "idle",
  },
  error: {
    verifyEmailError: null,
    resendOTPError: null,
  },
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
  reducers: {
    clearVerificationErrorMessage: (state, action) => {
      state.error = { verifyEmailError: "", resendOTPError: "" };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyEmail.pending, (state, action) => {
        state.status.verifyEmail = "loading";
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.status.verifyEmail = "success";
        state.data = action.payload;
        state.error.verifyEmailError = null;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.status.verifyEmail = "failed";
        state.error.verifyEmailError = action.payload as string;
      })
      .addCase(resendOTP.fulfilled, (state, action) => {
        state.status.resendOTP = "success";
        state.data = action.payload;
        state.error.resendOTPError = null;
      })
      .addCase(resendOTP.rejected, (state, action) => {
        state.status.resendOTP = "failed";
        state.error.resendOTPError = action.payload as string;
      });
  },
});

export default verifyEmailSlice.reducer;
