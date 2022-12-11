import PostItemComponent from "./post-page-item";
import { useParams } from "react-router";
import ReviewListComponent from "../../reviews";
import MapComponent from "../map/map";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { findPostByIdThunk } from "./../../../services/posts-thunk";
import { findReviewsByPostThunk } from "../../../services/reviews-thunk";
import Author from "../bio/author";

const PostPageComponent = () => {
  const { pid } = useParams();
  const { reviews } = useSelector((state) => state.reviews);
  const { details } = useSelector((state) => state.postsData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findPostByIdThunk(pid));
    dispatch(findReviewsByPostThunk(pid));
  }, [dispatch, pid]);

  let location = details.location;

  return (
    <div>
      <PostItemComponent post={details} />
      <div className="mt-3">
        <div className="row mt-2">
          <div className="col">
            {!location ? (
              <h2>loading map...</h2>
            ) : (
              <MapComponent place={location} />
            )}
          </div>
          <div className="col-5 mt-3 ">
            {details.author && <Author author={details.author} />}
          </div>
        </div>
        <br></br>
      </div>
      <ReviewListComponent reviews={reviews} className="float-none" />
    </div>
  );
};

export default PostPageComponent;
