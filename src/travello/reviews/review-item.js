import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { profileThunk } from "../../services/users-thunk";

const ReviewComponent = ({ review }) => {
  const defaultAvatar = "https://i.imgur.com/yTFUilP.jpg";
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, [dispatch]);

  let user = review.author;
  if (review.author === currentUser?._id) user = currentUser;
  let avatar = user.iconImage;
  if (!avatar) avatar = defaultAvatar;

  return (
    <>
      <div className="container rounded bg-white">
        <div className=" mt-1 p-3 text-justify ">
          <div className="row">
            <div className="col-1">
              <img
                src={avatar}
                alt="avatar"
                className="rounded-circle"
                width="60"
                height="60"
              />
            </div>
            <div className="col">
              <div className="ps-3">
                <h4 className="fs-5 fw-bold ">
                  {user.username}
                  <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
                  <span className="ms-2 text-secondary fw-normal fs-6">
                    {review.date}
                  </span>
                </h4>
                <p>{review.review}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReviewComponent;
