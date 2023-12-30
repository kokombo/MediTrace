import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorResponse, Medication, MedicationData } from "../../../type";
import axios from "axios";
import { StateType } from "../store";

const BASE_URL = "https://meditrace.onrender.com/api/v1";

type InitialState = {
  data: Medication[];
  status: {
    addMedication: "idle" | "loading" | "success" | "failed";
    fetchUserMedications: "idle" | "loading" | "success" | "failed";
  };
  error: {
    addMedicationError: string | null;
    fetchUserMedicationsError: string | null;
  };
};

const initialState: InitialState = {
  data: [],
  status: {
    addMedication: "idle",
    fetchUserMedications: "idle",
  },
  error: {
    addMedicationError: null,
    fetchUserMedicationsError: null,
  },
};

export const addMedicationReminder = createAsyncThunk(
  "medication/addMedicationReminder",
  async (
    medicationReminderInfo: MedicationData,
    { rejectWithValue }
  ): Promise<Medication> => {
    return axios
      .post(`${BASE_URL}/medications`, medicationReminderInfo)
      .then((res) => {
        return res.data.medicationData;
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          const errorResponse: ErrorResponse = error.response.data;

          return rejectWithValue(
            errorResponse.message || "Something went wrong, please try again"
          );
        } else {
          return rejectWithValue("Something went wrong, please try again");
        }
      });
  }
);

export const fetchUserMedications = createAsyncThunk(
  "medication/fetchUserMedications",
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as StateType;

    const user_id = state.user.user?.id;

    return axios
      .get(`${BASE_URL}/`)
      .then((res) => {
        return res.data.medicationData;
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          const errorResponse: ErrorResponse = error.response.data;

          return rejectWithValue(
            errorResponse.message || "Something went wrong, please try again"
          );
        } else {
          return rejectWithValue("Something went wrong, please try again");
        }
      });
  }
);

const medicationSlice = createSlice({
  name: "medication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addMedicationReminder.pending, (state, action) => {
        state.status.addMedication = "loading";
      })
      .addCase(addMedicationReminder.fulfilled, (state, action) => {
        state.status.addMedication = "success";
        state.error.addMedicationError = null;
      })
      .addCase(addMedicationReminder.rejected, (state, action) => {
        state.status.addMedication = "failed";
        state.error.addMedicationError = action.payload as string;
      })
      .addCase(fetchUserMedications.pending, (state, action) => {
        state.status.fetchUserMedications = "loading";
      })
      .addCase(fetchUserMedications.fulfilled, (state, action) => {
        state.status.fetchUserMedications = "success";
        state.data = action.payload;
        state.error.fetchUserMedicationsError = null;
      })
      .addCase(fetchUserMedications.rejected, (state, action) => {
        state.status.fetchUserMedications = "failed";
        state.error.fetchUserMedicationsError = action.payload as string;
      });
  },
});

export default medicationSlice.reducer;
