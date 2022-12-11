import { createSlice } from "@reduxjs/toolkit";
import { uploadImageThunk } from "../services/image-thunk";

const initialState = {
  imageUrl: "",
  loading: false,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  extraReducers: {
    [uploadImageThunk.pending]: (state) => {
      state.uploading = true;
      state.imageUrl = "";
    },
    [uploadImageThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.imageUrl = payload.secure_url;
    },
    [uploadImageThunk.rejected]: (state) => {
      state.uploading = false;
    },
  },
});

export default imageSlice.reducer;
