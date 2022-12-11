import axios from "axios";
import { REVIEWS_API, USERS_API } from "./api";

// const REVIEWS_API = BASE_API + "/reviews";
// "http://localhost:4000/api/reviews";
// const POST_REVIEWS_API = "http://localhost:4000/api/posts";
// const AUTHOR_REVIEWS_API = "http://localhost:4000/api/users";

const api = axios.create({ withCredentials: true });

export const createReview = async (review) => {
  const response = await api.post(REVIEWS_API, review);
  return response.data;
};

export const findReviewsByPost = async (postID) => {
  const response = await api.get(`${REVIEWS_API}/${postID}/reviews`);
  return response.data;
};

export const findReviewsByAuthor = async (author) => {
  const response = await api.get(`${USERS_API}/${author}/reviews`);
  return response.data;
};
