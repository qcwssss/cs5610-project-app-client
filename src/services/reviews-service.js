import axios from "axios";

const REVIEWS_API = "http://localhost:4000/api/reviews";
const POST_REVIEWS_API = "http://localhost:4000/api/posts";
const AUTHOR_REVIEWS_API = "http://localhost:4000/api/users";

const api = axios.create({ withCredentials: true });

export const createReview = async (review) => {
  const response = await api.post(REVIEWS_API, review);
  return response.data;
};

export const findReviewsByPost = async (postID) => {
  const response = await api.get(`${POST_REVIEWS_API}/${postID}/reviews`);
  return response.data;
};

export const findReviewsByAuthor = async (author) => {
  const response = await api.get(`${AUTHOR_REVIEWS_API}/${author}/reviews`);
  return response.data;
};
