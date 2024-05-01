import { useContext, useRef, useEffect } from "react";
import React from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);


  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  useEffect(() => {
     console.log("isFetching---------------->", isFetching)
  },[isFetching])

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FaceBook</h3>
          <span className="logingDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Email"
              className="loginInput"
              type="email"
              ref={email}
            />
            <input
              placeholder="Password"
              className="loginInput"
              type="password"
              ref={password}
            />
            <button className="loginButton" onClick={handleClick} disabled={isFetching} >
            Log In
              {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )} */}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            Create a New Account
              {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
