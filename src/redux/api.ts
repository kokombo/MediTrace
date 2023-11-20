import axios from "axios";

const BASE_URL = "";

export const getCurrentUser = async () => {
  const res = await axios.get(`${BASE_URL}/user`);
  return res.data;
};

export const addMedication = async () => {
  const res = await axios.post(`${BASE_URL}/medication`);
  return res.data;
};
