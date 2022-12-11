import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginThunk } from "./../services/users-thunk";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  const { error } = useSelector((state) => {
    return state.users;
  });
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLoginBtn = () => {
    try {
      dispatch(loginThunk({ username, password }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (currentUser) navigate("/home");
  });

  return (
    <>
      {error && <p className="alert alert-danger">{error.message}</p>}
      <div className="container w-75 bg-white rounded p-5">
        <h3>Log In</h3>

        <div className="mb-3">
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Username"
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button
            type="submit"
            onClick={handleLoginBtn}
            className="text-center btn btn-primary"
          >
            Log In
          </button>
        </div>
        {currentUser && <h3>Welcome {currentUser.username}</h3>}
      </div>
    </>
  );
};

export default LoginComponent;
