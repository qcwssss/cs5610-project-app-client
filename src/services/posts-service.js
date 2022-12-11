import axios from "axios";

const BASE_API = "http://localhost:4000/api";
const POSTS_API = "http://localhost:4000/api/posts";

const api = axios.create({ withCredentials: true });

export const createPost = async (post) => {
  const response = await api.post(POSTS_API, post);
  return response.data;
};

export const findPosts = async () => {
  const response = await api.get(POSTS_API);
  return response.data;
};

export const deletePost = async (pid) => {
  const response = await api.delete(`${POSTS_API}/${pid}`);
  return response.data;
};

export const findPostById = async (pid) => {
  const response = await api.get(`${POSTS_API}/${pid}`);
  return response.data;
};

export const findPostsByAuthor = async (author) => {
  const response = await api.get(`${BASE_API}/${author}/posts`);
  return response.data;
};

export const findPostsByLocation = async (location) => {
  const response = await api.get(`${POSTS_API}/location/${location}`);
  return response.data;
};

export const updatePost = async (post) => {
  await api.put(`${POSTS_API}/${post._id}`, post);
  return post;
};
