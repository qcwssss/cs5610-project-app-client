import { createSlice } from "@reduxjs/toolkit";
import {
  findAllUsersThunk,
  loginThunk,
  registerThunk,
  profileThunk,
  logoutThunk,
  findUserByIdThunk,
} from "./../services/users-thunk";

const usersReducer = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    currentUser: null,
    error: null,
    profile: null,
  },
  extraReducers: {
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [registerThunk.rejected]: (state, action) => {
      state.error = action.payload;
      state.currentUser = null;
    },
    [findAllUsersThunk.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
    },
    [loginThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [loginThunk.rejected]: (state, action) => {
      state.error = action.error;
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [findUserByIdThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [findUserByIdThunk.fulfilled]: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
    },
  },
});

export default usersReducer.reducer;
