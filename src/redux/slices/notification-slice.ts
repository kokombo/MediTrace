import { createSlice } from "@reduxjs/toolkit";
import { Notification } from "../../../type";

type InitialState = {
  data: Notification[];
};

const initialState: InitialState = {
  data: [],
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers(builder) {},
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
