import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./place-service";

export const getGeoThunk = createAsyncThunk(
  "posts/findCoord",
  async (place) => await service.getCoord(place)
);
