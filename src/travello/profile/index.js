import React from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { findUserByIdThunk } from "../../services/users-thunk";
import ProfileDetail from "./profile-detail";

const ProfileComponent = () => {
  const { uid } = useParams();

  const { profile } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findUserByIdThunk(uid));
  }, [dispatch, uid]);

  return (
    <>
      {!profile ? (
        <h2>loading profile</h2>
      ) : (
        <ProfileDetail profile={profile} />
      )}
    </>
  );
};

export default ProfileComponent;
