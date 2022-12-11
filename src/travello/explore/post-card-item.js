import "./index.css";
import StatusComponent from "./post-stats";
import { useNavigate } from "react-router-dom";

const PostCardComponent = ({ post }) => {
  let navigate = useNavigate();
  const handleClick = () => {
    let path = `/post/${post._id}`;
    navigate(path);
  };

  return (
    <div className="col">
      <div className="card thumbnail shadow-sm">
        <img
          onClick={handleClick}
          className="card-img-top"
          height="225"
          src={post.image}
          alt="post-card"
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <div className="text-primary">
            <i className="fa-solid fa-map-pin me-2"></i>
            <span className="fw-bold">{post.location}</span>
          </div>
          <p className="card-text">
            <small className="text-muted">
              <i className="mx-1 far fa-user"></i>
              <span className="me-1">
                {post.author ? post.author.username : "unknown"}
              </span>
              <i className="mx-1 fas fa-calendar-alt"></i>
              <span>{post.date}</span>
            </small>
          </p>
          <p className="card-text">{post.content}</p>
          <StatusComponent props={post} />
        </div>
      </div>
    </div>
  );
};

export default PostCardComponent;
