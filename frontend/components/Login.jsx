import axios from "axios";
import { useState } from "react";
import { useNew } from "../src/context/AuthContext";

const Login = () => {
  const urlLogin = "http://localhost:4000/api/login";
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const storeToken = useNew();
  const handleLogin = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    
    axios
      .post(urlLogin, {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        // localStorage.setItem("token", res.data.token );
        storeToken(res.data.token);
        alert("Login Successful");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="register" onSubmit={handleSubmit}>
      <form action="">
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            required
            aria-describedby="emailHelp"
            autoComplete="off" //!suggestion asbe na
            value={user.email}
            onChange={handleLogin}
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
            required
            value={user.password}
            onChange={handleLogin}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
