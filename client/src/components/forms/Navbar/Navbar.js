import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../../../Redux/Actions/userAction";
import "./Navbar.css";
const Navbar = () => {
  // const access = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  return (
    <header>
      {isAuth !== true ? (
        <div className="navbar">
          <div className="nav-container">
            {/* <Link to="/"> */}
            <img src="/img/logo.png" alt="" />
            {/* </Link> */}
            {/* <Link to="/"> */}
            <h2>Travel</h2>
            {/* </Link> */}
          </div>
          <div className="elem-container">
            {/* <Link to="/offers">
              <p>Offers</p>
            </Link> */}
            <Link to="/service">
              <p>Services</p>
            </Link>
            <Link to="signup">
              <p>Sign Up</p>
            </Link>
            <Link to="login">
              <p>Sign In</p>
            </Link>
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div className="nav-container">
            <Link to="/">
              <img src="/img/logo.png" alt="" />
            </Link>
            <Link to="/">
              <h2>Travel</h2>
            </Link>
          </div>
          <div className="elem-container">
            <Link to="/offers">
              <p>Offers</p>
            </Link>
            <Link to="/service">
              <p>Services</p>
            </Link>
            <Link to="/">
              <p onClick={() => dispatch(userLogout())}>Log Out</p>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
