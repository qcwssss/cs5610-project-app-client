import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadImageToCloud } from "./image-service";

export const uploadImageThunk = createAsyncThunk(
  "uploadImage",
  async (data) => await uploadImageToCloud(data)
);
