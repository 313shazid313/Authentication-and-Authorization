import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useNew } from "../../src/context/AuthContext";
import { Navigate } from "react-router-dom";

const Admin = () => {
  const { uniqueUser, isLoding } = useNew();
  
  if (isLoding) {
    return <h1 style={{ textAlign: "center" }}>Loading .................</h1>;
  }

  if (!uniqueUser.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/allusers">users</NavLink>
              </li>
              <li>
                <NavLink to="/admin/allcontacts">contacts</NavLink>
              </li>
              <li>
                <NavLink>services</NavLink>
              </li>
              <li>
                <NavLink to="/">home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Admin;
