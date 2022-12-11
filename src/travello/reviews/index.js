import ReviewComponent from "./review-item";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReviewThunk } from "./../../services/reviews-thunk";
import { useParams } from "react-router";
import { getCurrentDate } from "../../utils/date-format";

let bgColor = { backgroundColor: "#E4F0F9" };

const ReviewListComponent = ({ reviews }) => {
  const { pid } = useParams();
  const { currentUser } = useSelector((state) => state.users);
  const [review, setReview] = useState("");
  const dispatch = useDispatch();

  const handleSubmitReview = () => {
    dispatch(
      createReviewThunk({ review, postID: pid, date: getCurrentDate() })
    );
  };

  return (
    <>
      <div>
        {currentUser && (
          <div className="form-group px-3 pb-2 rounded" style={bgColor}>
            <label htmlFor="comment">
              <h2 className="fs-4 my-4 fw-bold text-secondary">
                Write Your Comment
              </h2>
            </label>
            <textarea
              name="comment"
              className="form-control"
              rows="5"
              onChange={(e) => {
                setReview(e.target.value);
              }}
              value={review}
            ></textarea>
            <button
              type="submit"
              onClick={handleSubmitReview}
              className="btn btn-light btn-lg mt-2"
            >
              Send
            </button>
          </div>
        )}
        {reviews.map((review) => (
          <ReviewComponent key={review._id} review={review} />
        ))}
      </div>
    </>
  );
};

export default ReviewListComponent;
