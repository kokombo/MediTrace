import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
