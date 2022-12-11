import { createSlice } from "@reduxjs/toolkit";
import {
  findPostsThunk,
  createPostThunk,
  deletePostThunk,
  findPostByIdThunk,
  findPostsByAuthorThunk,
  findPostsByLocationThunk,
} from "../services/posts-thunk";

const initialState = {
  posts: [],
  myposts: [],
  search: null,
  loading: false,
  details: {},
  imageSelected: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [findPostByIdThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.details = payload;
    },
    [findPostsThunk.pending]: (state) => {
      state.loading = true;
      state.posts = [];
    },
    [findPostsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [findPostsThunk.rejected]: (state) => {
      state.loading = false;
    },
    [createPostThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts.push(payload);
      state.myposts.push(payload);
    },
    [deletePostThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = state.posts.filter((p) => p._id !== payload);
    },
    [findPostsByAuthorThunk.pending]: (state) => {
      state.loading = true;
      state.myposts = [];
    },
    [findPostsByAuthorThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.myposts = payload;
    },
    [findPostsByLocationThunk.pending]: (state) => {
      state.loading = true;
      state.search = [];
    },
    [findPostsByLocationThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.search = payload;
    },
  },
});

export default postSlice.reducer;
