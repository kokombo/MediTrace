import axios from "axios";

const BASE_URL = "https://meditrace.onrender.com/api/v1/auth";

export const getCurrentUser = async () => {
  const res = await axios.get(`${BASE_URL}/user`);
  return res.data;
};

export const addMedication = async () => {
  const res = await axios.post(`${BASE_URL}/medication`);
  return res.data;
};

export const registerAUser = async () => {
  const res = await axios.post(`${BASE_URL}/register`);
  return res.data;
};
