import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorResponse, User } from "../../../type";
import axios from "axios";

const BASE_URL = "https://meditrace.onrender.com/api/v1/auth";

type UserType = {
  user: User | null;
  status: "idle" | "loading" | "success" | "failed";
  error: {
    registerError: string | null;
    loginError: string | null;
  };
  isErrorActive: boolean;
};

type UserRegistrationData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

type UserLoginData = {
  email: string;
  password: string;
};

const initialState: UserType = {
  user: null,
  status: "idle",
  error: {
    loginError: null,
    registerError: null,
  },
  isErrorActive: false,
};

export const createAccount = createAsyncThunk(
  "user/createAccount",
  async (userData: UserRegistrationData, { rejectWithValue }) => {
    return await axios
      .post(`${BASE_URL}/register`, userData)
      .then((res) => {
        return res.data.user_data;
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          const errorResponse: ErrorResponse = error.response.data;
          return rejectWithValue(
            errorResponse.message || "An error occured, please try again!"
          );
        } else {
          return rejectWithValue("An error occurred, please try again!");
        }
      });
  }
);

export const signIn = createAsyncThunk(
  "user/signIn",
  async (userData: UserLoginData, { rejectWithValue }) => {
    return await axios
      .post(`${BASE_URL}/login`, userData)
      .then((res) => {
        return res.data.user_data;
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          const errorResponse: ErrorResponse = error.response.data;
          return rejectWithValue(
            errorResponse.message || "An error occured, please try again"
          );
        } else {
          return rejectWithValue("An error occurred, please try again");
        }
      });
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearErrorMessage: (state, action) => {
      state.error = { registerError: "", loginError: "" };
      state.isErrorActive = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
        state.error.registerError = null;
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.status = "failed";
        state.isErrorActive = true;
        state.error.registerError = action.payload as string;
      })
      .addCase(signIn.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
        state.error.loginError = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.isErrorActive = true;
        state.error.loginError = action.payload as string;
      });
  },
});

export const { clearErrorMessage } = userSlice.actions;

export default userSlice.reducer;
