import NavigationSidebar from "./navigation-sidebar";
import "./background.css";
import Header from "./logo-bar";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import postsReducer from "../reducer/posts-reducer";
import placeReducer from "../reducer/place-reducer";
import usersReducer from "./../reducer/users-reducer";
import CurrentUser from "../user/current-user";
import reviewsReducer from "../reducer/reviews-reducer";
import imageReducer from "../reducer/image-reducer";
import RoutesComponent from "./routes";

const store = configureStore({
  reducer: {
    postsData: postsReducer,
    place: placeReducer,
    users: usersReducer,
    reviews: reviewsReducer,
    image: imageReducer,
  },
});

const Travello = () => {
  return (
    <Provider store={store}>
      <CurrentUser>
        <div className="row mt-2">
          <Header />
          <div className="col-1 col-md-1 col-lg-1 col-xl-2">
            <NavigationSidebar active="home" />
          </div>
          <div className="col">
            <RoutesComponent />
          </div>
        </div>
      </CurrentUser>
    </Provider>
  );
};
export default Travello;
