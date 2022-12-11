import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import CreatePostModalComponent from "../posts/create-post";
import { useSelector } from "react-redux";

const isLinkActive = (path, active) => {
  if (path.includes("profile") && active === "profile") return "active";
  return active === path ? "active" : "";
};

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[1];

  const { currentUser } = useSelector((state) => state.users);

  const getNavLinks = (currentUser) => {
    const links = [
      { path: "home", icon: "fa-house" },
      { path: "explore", icon: "fa-magnifying-glass" },
    ];

    const userLinks = [
      { path: "myposts", icon: "fa-hashtag" },
      { path: "bookmarks", icon: "fa-bookmark" },
      { path: `profile`, icon: "fa-user" },
    ];
    if (currentUser !== null) {
      userLinks[2].path = `profile/${currentUser._id}`;
      links.push(...userLinks);
    }
    links.push({ path: "more", icon: "fa-plus" });
    return links;
  };

  const links = getNavLinks(currentUser);

  return (
    <>
      <div className="list-group ">
        <Link to="/" className="list-group-item">
          <i className="d-xl-none fa-solid fa-compass"></i>
          <span className="d-none d-xl-inline-block"> Navigation</span>
        </Link>
        {links.map((link) => (
          <Link
            to={link.path}
            key={"link" + Math.random()}
            className={`list-group-item text-capitalize ${isLinkActive(
              link.path,
              active
            )}`}
          >
            <i className={`me-2 fa-solid ${link.icon}`}></i>
            <span className="d-none d-xl-inline-block">
              {link.path.includes("profile") ? "profile" : link.path}
            </span>
          </Link>
        ))}
        {currentUser && <CreatePostModalComponent />}
      </div>
    </>
  );
};

export default NavigationSidebar;
