import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  medications: Medication[];
};

const initialState: InitialState = {
  medications: [],
};

const medicationSlice = createSlice({
  name: "medication",
  initialState,
  reducers: {
    setMedication: (state, action) => {
      state.medications.push(action.payload);
    },
  },
});

export const { setMedication } = medicationSlice.actions;

export default medicationSlice.reducer;
