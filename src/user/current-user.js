import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { profileThunk } from "../services/users-thunk";

const CurrentUser = ({ children }) => {
  const { currentUser } = useSelector((state) => state.users);
  console.log(currentUser?.username);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, [dispatch]);

  return children;
};

export default CurrentUser;
