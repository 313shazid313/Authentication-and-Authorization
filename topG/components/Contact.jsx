import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const url = "http://localhost:8000/api/contact";
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
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
    axios
      .post(url, {
        username: user.username,
        email: user.email,
        message: user.message,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className="register" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            name="username"
            type="text"
            className="form-control"
            placeholder="Enter Your name"
            required
            autoComplete="off" //!suggestion asbe na
            value={user.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={user.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
