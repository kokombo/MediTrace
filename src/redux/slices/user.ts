import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  user: User | null;
};

const initialState: InitialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

// export const uploadProfilePicture = createAsyncThunk(
//   "user/uploadProfilePicture",
//   async (file: File, { getState, rejectWithValue }): Promise<string> => {
//     const state = getState() as StateType;

//     const token = state.user.user?.accessToken;

//     const formData = new FormData();

//     formData.append("file", file);

//     return axios
//       .patch("https://meditrace.onrender.com/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         return res.data.picture_url;
//       })
//       .catch((error) => {
//         if (error.response && error.response.data) {
//           const errorResponse = error.response.data;
//           return rejectWithValue(
//             errorResponse.message || "Something went wrong, please try again."
//           );
//         } else {
//           return rejectWithValue("Something went wrong, please try again.");
//         }
//       });
//   }
//
