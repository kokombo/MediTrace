import { createSlice } from "@reduxjs/toolkit";
import { Medication } from "../../../type";

type InitialState = {
  data: Medication[];
};

const initialState: InitialState = {
  data: [
    {
      id: "1",
      time: "2",
      name: "Paracetamol",
      treatment: "headache",
      color: "red",
    },
    {
      id: "2",
      time: "30",
      name: "Novagin",
      treatment: "Stomach ache",
      color: "blue",
    },
  ],
};

const medicationSlice = createSlice({
  name: "medication",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export default medicationSlice.reducer;
