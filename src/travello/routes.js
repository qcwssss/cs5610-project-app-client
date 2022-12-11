import { Routes, Route } from "react-router";
import EditProfileComponent from "./profile/edit-profile";
import RegisterComponent from "./../user/register";
import LoginComponent from "../user/login";
import ExploreComponent from "./explore";
import HomeComponent from "./home/index";
import ProfileComponent from "./profile/index";
import CollectionComponent from "./bookmarks/index";
import MyPostsComponent from "./myposts/index";
import PostPageComponent from "./posts/post-page/post-page";
import Users from "../user/users";
import MoreFeatures from "./posts/more";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomeComponent />} />
        <Route path="home" element={<HomeComponent />} />
        <Route path="explore" element={<ExploreComponent />} />
        <Route path="bookmarks" element={<CollectionComponent />} />
        <Route path="post/:pid" element={<PostPageComponent />} />
        <Route path="myposts" element={<MyPostsComponent />} />
        <Route path="profile/:uid" element={<ProfileComponent />} />
        <Route path="edit-profile/:uid" element={<EditProfileComponent />} />
        <Route path="register" element={<RegisterComponent />} />
        <Route path="login" element={<LoginComponent />} />
        <Route path="users" element={<Users />} />
        <Route path="more" element={<MoreFeatures />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
