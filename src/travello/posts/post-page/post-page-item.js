import "./post-page.css";
import UpdatePostModalComponent from "./../update-post";
import { useSelector } from "react-redux";

let bgColor = { backgroundColor: "#E4F0F9" };

const PostItemComponent = ({ post }) => {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <div className="container border-0 mb-0" style={bgColor}>
      <div className="row ">
        <div className="col mx-2 p-4">
          <h1 className="fs-2">{post.title}</h1>

          <div className="mt-4 fs-4 text-primary">
            <i className="fa-solid fa-map-pin me-3"></i>
            <span className="fw-bold">{post.location}</span>
          </div>
          <div className="mt-3 fs-4">
            <p className="fw-normal fs-light">{post.content}</p>
            <div className="fs-5 text-secondary">
              <span>
                <i className="far fa-user me-2"></i>
                {post.author ? post.author.username : "unknown"}
              </span>
              <i className="fa-solid fa-calendar-days mx-2"></i>
              {post.date}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 px-0 m-auto">
          <div
            style={{
              position: "relative",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {currentUser &&
              post.author &&
              currentUser._id === post.author._id && (
                <UpdatePostModalComponent original={post} />
              )}

            <img className="img-fluid" src={post.image} alt="postImage"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItemComponent;
