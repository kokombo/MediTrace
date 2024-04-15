import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import medicationSlice from "./slices/medication-slice";
import notificationSlice from "./slices/notification-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    medication: medicationSlice,
    notification: notificationSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type StateType = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;
