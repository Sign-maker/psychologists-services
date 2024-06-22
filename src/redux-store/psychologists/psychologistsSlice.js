import { createSlice } from "@reduxjs/toolkit";
import { getPsychologists } from "./psychologistsOperations";
import { FILTER_OPTIONS, LIMIT } from "../../constants/filterConstants";
const initialState = {
  psychologistsItems: [],
  isPsychologistsLoading: false,
  paginationParams: { nextKey: null, nextValue: null },
  error: null,
};

export const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState,
  reducers: {
    resetPsychologists: (state) => {
      state.psychologistsItems = [];
      state.isPsychologistsLoading = false;
      state.paginationParams.nextKey = null;
      state.paginationParams.nextValue = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPsychologists.pending, (state) => {
      state.isPsychologistsLoading = true;
    });

    builder.addCase(getPsychologists.fulfilled, (state, { payload }) => {
      const { tempItems, selectedFilter } = payload;

      if (tempItems.length > LIMIT) {
        state.paginationParams.nextKey = tempItems[tempItems.length - 1].key;
        if (FILTER_OPTIONS[selectedFilter].key) {
          state.paginationParams.nextValue =
            tempItems[tempItems.length - 1][FILTER_OPTIONS[selectedFilter].key];
        }

        tempItems.pop();
      } else {
        state.paginationParams.nextKey = null;
        state.paginationParams.nextValue = null;
      }

      state.psychologistsItems = [...state.psychologistsItems, ...tempItems];
      state.isPsychologistsLoading = false;
      state.error = null;
    });

    builder.addCase(getPsychologists.rejected, (state, { payload }) => {
      state.error = payload;
      state.isPsychologistsLoading = false;
    });
  },
});
