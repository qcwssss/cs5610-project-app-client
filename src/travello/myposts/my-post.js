import React from "react";
import PostCardComponent from "../explore/post-card-item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findPostsByAuthorThunk } from "./../../services/posts-thunk";

const MyPost = () => {
  const { currentUser } = useSelector((state) => state.users);

  const { myposts, loading } = useSelector((state) => {
    return state.postsData;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findPostsByAuthorThunk(currentUser?._id));
  }, [dispatch, currentUser]);

  return (
    <div>
      {currentUser?._id && loading && <h3>loading</h3>}
      <h2>You have total {myposts.length} posts</h2>
      <div className="mt-1 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {myposts.map((post) => (
          <PostCardComponent key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MyPost;
