import React, { useState } from "react";
import "./SignInForm.css";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../Redux/Actions/userAction";

const SignInForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  // console.log("Hey", isAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="register-login">
      <div className="image">
        <img src="/img/login.svg" alt="sign" />
      </div>
      <div className="col-3">
        <div className="form-container">
          <div className="form-btn">
            <input
              className="Input-SignUp"
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              className="Input-SignUp"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <br />
            <button
              className="Btn-SignUp"
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  userLogin({ email, password })
                  // history
                );
              }}
            >
              <img src="/img/user.png" alt="register" />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInForm;
