import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  findUserById,
  login,
  logout,
  profile,
  register,
  findAllUsers,
  updateUserProfile,
} from "./users-service";

export const registerThunk = createAsyncThunk(
  "register",
  async (user) => await register(user)
);

export const loginThunk = createAsyncThunk(
  "login",
  async (user) => await login(user)
);

export const logoutThunk = createAsyncThunk(
  "logout",
  async () => await logout()
);

export const profileThunk = createAsyncThunk(
  "profile",
  async () => await profile()
);

export const findUserByIdThunk = createAsyncThunk(
  "findUserById",
  async (uid) => await findUserById(uid)
);

export const findAllUsersThunk = createAsyncThunk(
  "findAllUsers",
  async () => await findAllUsers()
);

export const updateUserProfileThunk = createAsyncThunk(
  "updateUserProfile",
  async (newProfile) => await updateUserProfile(newProfile)
);
