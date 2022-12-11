import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "./../../services/users-thunk";

const Header = () => {
  const { currentUser } = useSelector((state) => state.users);

  let navigate = useNavigate();

  const handleRegister = () => {
    let path = "/register";
    navigate(path);
  };

  const handleLogin = () => {
    let path = "/login";
    navigate(path);
  };

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/home");
  };

  return (
    <div className="pt-2 pb-1 border rounded-pill bg-white mb-4">
      <img
        src="../images/travello.png"
        alt="travello"
        height="60"
        className="ms-4 pt-1 float-start"
      />

      <div
        className="btn-group rounded-pill float-end mt-1 me-2 "
        role="group"
        aria-label="Basic example"
      >
        {currentUser && (
          <div className="my-auto me-3 fs-4 ">Hi {currentUser.username}</div>
        )}
        {!currentUser ? (
          <>
            <button
              type="button"
              onClick={handleRegister}
              className="btn btn-dark btn-lg rounded-pill me-3"
            >
              Register
            </button>

            <button
              type="button"
              onClick={handleLogin}
              className="btn btn-primary btn-lg rounded-pill"
            >
              Log In
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-warning btn-lg rounded-pill"
            >
              <span className="text-light fw-bold">Log Out</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
