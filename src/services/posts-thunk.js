import * as service from "./posts-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findPostsThunk = createAsyncThunk(
  "posts/findPosts",
  async () => await service.findPosts()
);

export const deletePostThunk = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    await service.deletePost(postId);
    return postId;
  }
);

export const findPostByIdThunk = createAsyncThunk(
  "posts/findPostById",
  async (postId) => await service.findPostById(postId)
);

export const findPostsByAuthorThunk = createAsyncThunk(
  "posts/findPostsByAuthor",
  async (author) => await service.findPostsByAuthor(author)
);

export const findPostsByLocationThunk = createAsyncThunk(
  "posts/findPostsByLocation",
  async (location) => await service.findPostsByLocation(location)
);

export const createPostThunk = createAsyncThunk(
  "posts/createPost",
  async (post) => {
    return await service.createPost(post);
  }
);

export const updatepostThunk = createAsyncThunk(
  "posts/updatePost",
  async (post) => await service.updatePost(post)
);
