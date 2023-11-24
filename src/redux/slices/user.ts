import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorResponse, User } from "../../../type";
import axios from "axios";
import { StateType } from "../store";

const BASE_URL = "https://meditrace.onrender.com/api/v1/auth";

type InitialState = {
  user: User | null;
  status: {
    register: "idle" | "loading" | "success" | "failed";
    login: "idle" | "loading" | "success" | "failed";
    uploadProfilePicture: "idle" | "loading" | "success" | "failed";
  };
  error: {
    registerError: string | null;
    loginError: string | null;
    uploadProfilePictureError: string | null;
  };
  isErrorActive: boolean;
  picture: string | null;
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

const initialState: InitialState = {
  user: null,
  status: {
    login: "idle",
    register: "idle",
    uploadProfilePicture: "idle",
  },
  error: {
    loginError: null,
    registerError: null,
    uploadProfilePictureError: null,
  },
  isErrorActive: false,
  picture: "",
};

export const createAccount = createAsyncThunk(
  "user/createAccount",
  async (userData: UserRegistrationData, { rejectWithValue }) => {
    return await axios
      .post(`${BASE_URL}/register`, userData)
      .then((res) => {
        return res.data.userData;
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
        return res.data.userData;
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

export const uploadProfilePicture = createAsyncThunk(
  "user/uploadProfilePicture",
  async (file: File, { getState, rejectWithValue }) => {
    const state = getState() as StateType;

    const token = state.user.user?.accessToken;

    const formData = new FormData();

    formData.append("file", file);

    return axios
      .patch("https://meditrace.onrender.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return res.data.picture_url;
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
      state.error = {
        registerError: "",
        loginError: "",
        uploadProfilePictureError: "",
      };
      state.isErrorActive = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state, action) => {
        state.status.register = "loading";
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.status.register = "success";
        state.user = action.payload;
        state.error.registerError = null;
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.status.register = "failed";
        state.error.registerError = action.payload as string;
      })
      .addCase(signIn.pending, (state, action) => {
        state.status.login = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status.login = "success";
        state.user = action.payload;
        state.error.loginError = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status.login = "failed";
        state.error.loginError = action.payload as string;
      })
      .addCase(uploadProfilePicture.pending, (state, action) => {
        state.status.uploadProfilePicture = "loading";
      })
      .addCase(uploadProfilePicture.fulfilled, (state, action) => {
        state.status.uploadProfilePicture = "success";
        state.picture = action.payload;
        state.error.uploadProfilePictureError = null;
      })
      .addCase(uploadProfilePicture.rejected, (state, action) => {
        state.status.uploadProfilePicture = "failed";
        state.error.uploadProfilePictureError = action.payload as string;
      });
  },
});

export const { clearErrorMessage } = userSlice.actions;

export default userSlice.reducer;
