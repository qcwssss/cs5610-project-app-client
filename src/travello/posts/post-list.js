import PostCardComponent from "../explore/post-card-item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findPostsThunk } from "./../../services/posts-thunk";

const PostListComponent = () => {
  const { posts, loading } = useSelector((state) => {
    return state.postsData;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findPostsThunk());
  }, [dispatch]);

  return (
    <div>
      {loading && <h3>loading</h3>}
      <div className="mt-1 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {posts.map((post) => (
          <PostCardComponent key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostListComponent;
