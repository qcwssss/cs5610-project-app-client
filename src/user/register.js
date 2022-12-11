import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "./../services/users-thunk";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegisterBtn = () => {
    if (password !== validatePassword) {
      setError("Passwords must match");
      return;
    }
    setError(null);
    const newUser = { username, password, email };
    console.log(newUser);
    dispatch(registerThunk(newUser));
    navigate("/home");
  };

  return (
    <div className="container w-75 bg-white rounded p-5">
      {error && (
        <>
          <div className="alert alert-danger">{error}</div>
        </>
      )}
      <h3>Register</h3>

      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="form-control"
          placeholder="Enter email"
          required
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>

      <div className="mb-3">
        <label>Comfirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm password"
          required
          value={validatePassword}
          onChange={(e) => setValidatePassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button className="btn btn-primary" onClick={handleRegisterBtn}>
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterComponent;
