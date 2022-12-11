import { createSlice } from "@reduxjs/toolkit";
import { getGeoThunk } from "../services/place-thunk";

const initialState = {
  geo: null,
  loading: false,
};

const placeSlice = createSlice({
  name: "coordinate",
  initialState,
  extraReducers: {
    [getGeoThunk.pending]: (state) => {
      state.loading = true;
    },
    [getGeoThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.geo = payload;
    },
    [getGeoThunk.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default placeSlice.reducer;
