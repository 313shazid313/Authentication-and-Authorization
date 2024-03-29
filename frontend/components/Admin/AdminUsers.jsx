import React, { useEffect, useState } from "react";
import { useNew } from "../../src/context/AuthContext";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const { authToken } = useNew();
  const [allusers, setAllusers] = useState([]);
  const getUserData = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/users", {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });
      const data = await res.json();
      console.log(`users ${data}`);
      setAllusers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []); // [] babohar korle barbar code run hobe na // code shudhu first time run hobe

  return (
    <div className="container1">
      {allusers.map((topg, index) => {
        return (
          <div className="container2">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h2 className="card-title" key={index}>
                  {topg.username}
                </h2>
                <h4
                  className="card-subtitle mb-2 text-body-secondary"
                  key={index}
                >
                  {topg.email}
                </h4>
                <h4 className="card-text">
                  {topg.phone}
                </h4>
                <Link className="card-link">delete</Link>
              </div>
            </div>
          </div>
        );
      })}


      
    </div>
  );
};

export default AdminUsers;

/* {allusers.map((topg, index) => {
        return <h1 key={index}>{topg.username}</h1>;
      })} */
