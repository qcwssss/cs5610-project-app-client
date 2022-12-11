import "./home.css";
import IntroCard from "./intro-card/intro-card";
import { useNavigate } from "react-router-dom";
import PostListComponent from "./../posts/post-list";

const HomeComponent = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/explore`;
    navigate(path);
  };
  return (
    <div>
      <div className="container search-box rounded">
        <div className="px-4">
          <div className="text-center">
            <h2 className="fw-bolder text-light ">Travel, Explore & Share</h2>
            <p className="fs-3" style={{ color: "#e6f7f5" }}>
              Still round the corner, there may wait, a new road or a secret
              gate !
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-center fw-bolder text-light fs-1 m-4">
        What We Have
      </h2>

      <IntroCard />
      <div className="text-center m-4">
        <button
          onClick={routeChange}
          className="btn btn-lg btn-primary fw-bolder"
        >
          Explore
        </button>
      </div>
      <div>
        <h2 className="text-center fw-bolder text-white fs-1 m-4">
          Our Latest Posts
        </h2>
        <PostListComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
