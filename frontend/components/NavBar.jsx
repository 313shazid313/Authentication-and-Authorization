import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "../style/main.css";
import { useNew } from "../src/context/AuthContext";

const NavBar = () => {
  const { isLoggedin } = useNew();
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bd-transparent">
          {/* navbar div er classname e "fixed-top" name ekta ginish dawa thakbe // oita dawa jabe na // dile component navbar er moddhe ase jabe */}
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              Website
            </NavLink>
            <button
              className="navbar-toggler shadow-none border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              <GiHamburgerMenu />
            </button>
            <div
              className="offcanvas offcanvas-end"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close shadow-none"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <NavLink to="/" className="nav-link" aria-current="page">
                      Home
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="nav-item">
                    {/* data-bs-dismiss="offcanvas" dile click korar por canvus offf hoya jabe */}
                    <NavLink to="/about" className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="nav-item">
                    <NavLink className="nav-link" to="/service">
                      Products
                    </NavLink>
                  </li>

                  {isLoggedin ? (
                    <li data-bs-dismiss="offcanvas" className="nav-item">
                      <NavLink className="nav-link" to="/logout">
                        Logout
                      </NavLink>
                    </li>
                  ) : (
                    <li data-bs-dismiss="offcanvas" className="nav-item">
                      <NavLink className="nav-link" to="/login">
                        Login
                      </NavLink>
                    </li>
                  )}
                  {/* <li data-bs-dismiss="offcanvas" className="nav-item">
                      <NavLink className="nav-link" to="/login">
                        Login
                      </NavLink>
                    </li> */}
                  <li data-bs-dismiss="offcanvas" className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Registration
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
