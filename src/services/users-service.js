import axios from "axios";

const BASE_API_URL = "http://localhost:4000/api";
const USER_API_URL = BASE_API_URL + "/users";

const api = axios.create({ withCredentials: true });

export const findUserById = async (uid) => {
  const response = await api.get(`${USER_API_URL}/${uid}`);
  const user = response.data;
  return user;
};

export const register = async (user) => {
  const response = await api.post(`${BASE_API_URL}/register`, user);
  const newUser = response.data;
  return newUser;
};

export const login = async (user) => {
  try {
    const response = await api.post(`${BASE_API_URL}/login`, user);
    return response.data;
  } catch (err) {
    console.log(err.message);
    throw new Error("Incorrect username or password");
  }
};

export const logout = async () => {
  const response = await api.post(`${BASE_API_URL}/logout`);
  return response.data;
};

export const profile = async () => {
  const response = await api.post(`${BASE_API_URL}/profile`);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axios.get(USER_API_URL);
  return response.data;
};

export const updateUserProfile = async (profile) => {
  console.log(profile);
  const response = await axios.put(`${USER_API_URL}/${profile._id}`, profile);
  return response.status;
};