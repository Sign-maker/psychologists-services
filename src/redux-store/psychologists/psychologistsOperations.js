import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, getDatabase, ref, query } from "firebase/database";
import { DB_PSYCHOLOGISTS_PATH, app } from "../../constants/firebase";
import { FILTER_OPTIONS, SORT_ORDER } from "../../constants/filterConstants";

const db = getDatabase(app);

export const getPsychologists = createAsyncThunk(
  "psychologists/getPsychologists",
  async (queryConstraint, thunkAPI) => {
    const selectedFilter = thunkAPI.getState().filter.selectedFilter;

    try {
      const tempItems = [];
      const currentRef = query(
        ref(db, DB_PSYCHOLOGISTS_PATH),
        ...queryConstraint
      );

      const snapShot = await get(currentRef);
      if (!snapShot.exists()) {
        thunkAPI.rejectWithValue({ message: "Data is not avaliable" });
        return;
      }
      snapShot.forEach((item) => {
        tempItems.push({ key: item.key, ...item.val() });
      });

      if (FILTER_OPTIONS[selectedFilter].sortOrder === SORT_ORDER.desc) {
        tempItems.reverse();
      }

      return { tempItems, selectedFilter };
    } catch (error) {
      thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);
