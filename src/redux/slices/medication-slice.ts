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
    },

    {
      id: "2",
      time: "30",
      name: "Novagin",
      treatment: "Stomach ache",
    },

    {
      id: "3",
      time: "2",
      name: "Paracetamol",
      treatment: "headache",
    },

    {
      id: "4",
      time: "30",
      name: "Novagin",
      treatment: "Stomach ache",
    },

    {
      id: "5",
      time: "2",
      name: "Paracetamol",
      treatment: "headache",
    },

    {
      id: "6",
      time: "30",
      name: "Novagin",
      treatment: "Stomach ache",
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
