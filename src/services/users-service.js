import axios from "axios";
import { BASE_API, USERS_API } from "./api";

const api = axios.create({ withCredentials: true });

export const findUserById = async (uid) => {
  const response = await api.get(`${USERS_API}/${uid}`);
  const user = response.data;
  return user;
};

export const register = async (user) => {
  const response = await api.post(`${BASE_API}/register`, user);
  const newUser = response.data;
  return newUser;
};

export const login = async (user) => {
  try {
    const response = await api.post(`${BASE_API}/login`, user);
    return response.data;
  } catch (err) {
    console.log(err.message);
    throw new Error("Incorrect username or password");
  }
};

export const logout = async () => {
  const response = await api.post(`${BASE_API}/logout`);
  return response.data;
};

export const profile = async () => {
  const response = await api.post(`${BASE_API}/profile`);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

export const updateUserProfile = async (profile) => {
  console.log(profile);
  const response = await axios.put(`${USERS_API}/${profile._id}`, profile);
  return response.status;
};
