import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  createReview,
  findReviewsByAuthor,
  findReviewsByPost,
} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
  "createReview",
  async (review) => createReview(review)
);

export const findReviewsByPostThunk = createAsyncThunk(
  "findReviewsByPostThunk",
  async (postID) => findReviewsByPost(postID)
);
export const findReviewsByAuthorThunk = createAsyncThunk(
  "findReviewsByAuthorThunk",
  async (author) => findReviewsByAuthor(author)
);
