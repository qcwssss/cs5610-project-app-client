import { Link } from "react-router-dom";
import dateHandler from "../../utils/date-format";
import { useParams } from "react-router";

// inline style
const bannerStyle = { objectFit: "cover" };
const nudge = { height: "60%", left: "5%", bottom: "-30%" };

const ProfileDetail = ({ profile }) => {
  const { uid } = useParams();

  return (
    <div className="container bg-white rounded">
      <div className="row">
        <div className="col-2 d-flex align-items-center">
          <i className="fs-4 fa-solid fa-arrow-left"></i>
        </div>
        <div className="col-10 m-auto block">
          <h2 className="fw-bold mb-0 mt-1">
            {profile?.firstName ? profile.firstName : "Firstname"}{" "}
            {profile?.lastName ? profile.lastName : " lastname"}
          </h2>
          <span className="text-secondary">0 Posts</span>
        </div>
      </div>
      <div className="mt-2 position-relative">
        <img
          className="w-100"
          style={bannerStyle}
          height={160}
          src={`/images/banner.jpg`}
          alt="banner"
        />
        <img
          className="bg-white position-absolute rounded-pill"
          style={nudge}
          src={profile.iconImage}
          alt="profile"
        />
      </div>
      <Link to={`/edit-profile/${uid}`} className="clearfix">
        <button className="btn btn-light rounded-pill float-end mt-2 fw-bolder">
          Edit Profile
        </button>
      </Link>
      <div className="mt-2 ">
        <h2 className="fw-bolder">{profile.username}</h2>
      </div>
      <div>
        <p>
          {profile.bio
            ? profile.bio
            : "This user is too lazy to write something..."}
        </p>

        <div className="text-secondary clearfix">
          {profile.location && (
            <div className="float-start">
              <i className="bi bi-geo-alt"></i> {profile.location}
            </div>
          )}
          {profile.dateOfBirth && (
            <div className="float-start ms-4">
              <i className="bi bi-calendar ms-2 "></i> Born
              <span className="ms-2">
                {dateHandler(profile.dateOfBirth, false)}
              </span>
            </div>
          )}
          {profile.dateJoined && (
            <div className="float-start ms-4">
              <i className="bi bi-balloon ms-2"></i> Joined{" "}
              {dateHandler(profile.dateJoined, true)}
            </div>
          )}
        </div>

        <div className="py-2 clearfix ">
          <div className="float-start">
            <span className="fw-bolder">0</span>{" "}
            <span className="text-secodary">Posts</span>
          </div>
          <div className="float-start ms-4">
            <span className="fw-bolder">0</span>{" "}
            <span className="text-secodary">Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
