import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useNew } from "../src/context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const url = "http://localhost:4000/api/register";
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const storeToken = useNew()

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const userSubmuitted = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post(url, {
        username: user.username,
        email: user.email,
        phone: user.phone,
        password: user.password,
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
        // localStorage.setItem("token", res );
        storeToken(res.data.token)
        alert("Registration successful ");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="register">
        <form onSubmit={userSubmuitted}>
          <h2>Regitration Form</h2>
          <div className="input-group mb-3">
            <input
              name="username"
              type="text"
              className="form-control"
              placeholder="Username"
              required
              autoComplete="off" //!suggestion asbe na
              value={user.username}
              onChange={handleInput}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              autoComplete="off" //!suggestion asbe na
              required
              aria-describedby="emailHelp"
              value={user.email}
              onChange={handleInput}
            />
            <div id="emailHelp" className="form-text">
              Well never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="phone">
              Phone
            </label>
            <input
              name="phone"
              type="number"
              id="phone"
              className="form-control"
              autoComplete="off" //!suggestion asbe na
              required
              value={user.phone}
              onChange={handleInput}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Create Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              autoComplete="off" //!suggestion asbe na
              required
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
