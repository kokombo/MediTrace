import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import verifyEmailSlice from "./slices/verify-email-slice";
import medicationSlice from "./slices/medication-slice";
import notificationSlice from "./slices/notification-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    verification: verifyEmailSlice,
    medication: medicationSlice,
    notification: notificationSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type StateType = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;
