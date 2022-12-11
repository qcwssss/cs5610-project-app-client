import React from "react";
import PostCardComponent from "../explore/post-card-item";

const SearchResult = ({ search }) => {
  return (
    <div>
      {search.length === 0 ? (
        <h2>There are no posts </h2>
      ) : (
        <>
          <div className="mt-1 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {search.map((post) => (
              <PostCardComponent key={post._id} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResult;
