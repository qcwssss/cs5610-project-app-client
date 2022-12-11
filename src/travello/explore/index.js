import PostListComponent from "../posts/post-list";
import { useDispatch, useSelector } from "react-redux";
import SearchResult from "./search";
import { findPostsByLocationThunk } from "./../../services/posts-thunk";
import { useState } from "react";

const ExploreCardList = () => {
  const { search } = useSelector((state) => state.postsData);

  const dispatch = useDispatch();
  const [location, setLocation] = useState("");

  const handleSearchClick = () => {
    dispatch(findPostsByLocationThunk(location));
  };

  return (
    <div>
      <div className="container search-box rounded">
        <div className="px-4">
          <div>
            <h2 className="fw-bolder fs-1 text-light m-3">Find Your Place</h2>
            <div className="search-2">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                className="form-control"
                type="text"
                placeholder="San Francisco,USA"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button className="btn btn-danger" onClick={handleSearchClick}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {!search ? (
        <>
          <PostListComponent />
        </>
      ) : (
        <SearchResult search={search} />
      )}
    </div>
  );
};
export default ExploreCardList;
