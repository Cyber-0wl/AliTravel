import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { userRegister } from "../../Redux/Actions/userAction";
import "./SignUpForm.css";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAuth = useSelector((state) => state.userReducer.isAuth);
  // console.log("Fred", isAuth);

  if (isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div className="register-login">
      <div className="image">
        <img src="/img/sign1.svg" alt="sign" />
      </div>
      <div className="col-2">
        <div className="form-container">
          <div className="form-btn">
            <input
              className="Input-SignUp"
              type="text"
              name="name"
              placeholder="Username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <br />
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
                  userRegister({ name, email, password })
                  // history
                );
              }}
            >
              <img src="/img/checkbox.png" alt="register" />
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
