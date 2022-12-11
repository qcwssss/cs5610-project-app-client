import { useDispatch } from "react-redux";
import { deletePostThunk } from "../../services/posts-thunk";
import { useSelector } from "react-redux";

const StatusComponent = ({ props }) => {
  let isOwner = false;
  const { likes, _id, author } = props;
  const { currentUser } = useSelector((state) => state.users);
  if (currentUser?._id === author._id) isOwner = true;

  const dispatch = useDispatch();

  const deletePostHandler = (id) => {
    dispatch(deletePostThunk(id));
  };

  return (
    <small className="row text-muted">
      <div className="col-5">
        <span className="d-none d-xl-block">
          {likes} Likes <i className="fa-regular fa-thumbs-up"></i>
        </span>
      </div>
      <div className="col-5">
        <span className="d-none d-xl-block">
          Bookmark <i className="fa-regular fa-bookmark "></i>
        </span>
      </div>
      <div className="col-2 mt-1">
        <>
          {isOwner && (
            <div className="wd-alert me-2 pb-1 text-secondary">
              <i
                className="fa-solid fa-x float-end "
                onClick={() => deletePostHandler(_id)}
              ></i>
            </div>
          )}
        </>
      </div>
    </small>
  );
};

export default StatusComponent;
