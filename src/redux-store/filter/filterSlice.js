import { createSlice } from "@reduxjs/toolkit";
import { FILTER_OPTIONS } from "../../constants/filterConstants";

const initialState = {
  selectedFilter: { ...FILTER_OPTIONS.nameAsc },
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {},
});
