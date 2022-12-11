import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findAllUsersThunk } from "../services/users-thunk";

const Users = () => {
  const { users } = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllUsersThunk());
  }, [dispatch]);

  return (
    <>
      <h1>Users {users.length}</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user._id} className="list-group-item">
            {user.username}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
