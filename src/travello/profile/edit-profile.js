import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { uploadImageThunk } from "../../services/image-thunk";
import { updateUserProfileThunk } from "../../services/users-thunk";
import { findUserByIdThunk } from "../../services/users-thunk";
import { useNavigate, useParams } from "react-router";

const EditProfileComponent = () => {
  const { uid } = useParams();
  const navigiate = useNavigate();

  const { profile } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findUserByIdThunk(uid));
  }, [dispatch, uid]);

  const [profileData, setProfileData] = useState(profile);
  // console.log("profileData", profileData);
  // returned new image
  const { imageUrl } = useSelector((state) => {
    return state.image;
  });

  const [imageSelected, setImageSelected] = useState(""); //new
  const [iconUrl, setIconUrl] = useState(profile?.iconImage); //old

  useEffect(() => {
    if (imageUrl !== "") {
      setIconUrl(imageUrl);
      console.log(imageUrl);
      return;
    }

    if (profile) {
      setProfileData(profile);
      setIconUrl(profile.iconImage);
    }
  }, [profile, imageUrl]);

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "yufx9r6u");

    dispatch(uploadImageThunk(formData));
  };

  const saveProfileHandler = () => {
    const newProfile = { ...profileData };
    if (imageUrl !== "") newProfile.iconImage = imageUrl;
    console.log(newProfile);
    console.log(uid);
    dispatch(updateUserProfileThunk(newProfile));
    navigiate(`/profile/${uid}`);
  };

  return (
    <>
      {!profile ? (
        <h2>loading</h2>
      ) : (
        <div className="container bg-white rounded">
          <div className="bg-white clearfix p-3">
            <Link to={`/profile/${uid}`}>
              <i className="fs-4 mt-2 fa-solid fa-xmark float-start"></i>
            </Link>
            <h3 className="fw-bold mt-1 mx-5 float-start">Edit Profile</h3>
            <div className="float-end ms-5">
              <button
                className="btn btn-dark fw-bold rounded-pill"
                onClick={() => {
                  saveProfileHandler();
                }}
              >
                Save
              </button>
            </div>
          </div>

          <div className="mt-1 ">
            <div className="w-100 ">
              <img
                className="bg-white rounded-pill ms-2"
                height={100}
                src={iconUrl}
                alt="profile"
              />
              <div>
                <input
                  type="file"
                  onChange={(e) => {
                    setImageSelected(e.target.files[0]);
                  }}
                />

                <button
                  className="btn btn-light mt-2 me-3"
                  onClick={() => uploadImage()}
                >
                  upload
                </button>
                <span className="text-success mt-2">
                  {imageUrl !== "" && <i class="fa-solid fa-check"></i>}
                </span>
              </div>

              <form className="mt-3">
                <div className="form-group mb-3  border rounded">
                  <label
                    htmlFor="inputName"
                    className="ps-3 pt-1 text-secondary"
                  >
                    Firstname
                  </label>
                  <input
                    type="text"
                    className="ps-3 form-control border border-0"
                    id="inputFirstname"
                    placeholder="firstname"
                    value={profileData?.firstName ? profileData.firstName : ""}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        firstName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="form-group mb-3  border rounded">
                  <label
                    htmlFor="inputName"
                    className="ps-3 pt-1 text-secondary"
                  >
                    Lastname
                  </label>
                  <input
                    type="text"
                    className="ps-3 form-control border border-0"
                    id="inputLastName"
                    placeholder="lastname"
                    value={profileData?.lastName ? profileData.lastName : ""}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-3 border rounded">
                  <label
                    htmlFor="inputBio"
                    className="ps-2 pt-1 text-secondary"
                  >
                    Bio
                  </label>
                  <textarea
                    rows={3}
                    className="ps-2 form-control border border-0"
                    id="inputBio"
                    placeholder="Bio"
                    value={profileData?.bio ? profileData.bio : ""}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        bio: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-3 border rounded">
                  <label
                    htmlFor="location"
                    className="ps-2 pt-1 text-secondary"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    className="ps-2 form-control border border-0"
                    id="location"
                    placeholder="Location"
                    value={profileData.location ? profileData.location : ""}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        location: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-5 ">
                  <label
                    htmlFor="birhdate"
                    className="ps-2 pt-1 text-secondary"
                  >
                    Birthdate · <span style={{ color: "#2E9AFE" }}>Edit</span>
                  </label>
                  <input
                    type="date"
                    className="ps-2 form-control border border-0"
                    id="birthdate"
                    // value={formatBirthDate(dateOfBirth)}
                    value={profileData?.dateOfBirth}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        dateOfBirth: e.target.value,
                      })
                    }
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfileComponent;
