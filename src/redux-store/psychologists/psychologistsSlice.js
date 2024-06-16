import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  psychologists: [],
  isPsychologistsLoadind: false,
  error: null,
};

export const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState,
  reducers: {},
});
