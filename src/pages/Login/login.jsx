import { useContext, useRef, useEffect } from "react";
import React from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Login() {
  const navigate = useNavigate();
  const { isFetching, dispatch } = useContext(AuthContext);


  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      loginCall(
        {email: values.email, password : values.password},
        dispatch
      )
      resetForm()
      console.log("values", values)
    },
  });


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="logingDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight">
          <form  onSubmit={formik.handleSubmit}>
            <div className="loginBoxLogin">
              <input
                placeholder="Email"
                className="loginInput"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
              />
              <p className="WarningParagraph">{formik.touched.email && formik.errors.email}</p>
              <input
                placeholder="Password"
                className="loginInput"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
              />
              <p className="WraningParagraphPassword">{formik.touched.password && formik.errors.password}</p>
              <button className="loginButton" type="submit" disabled={isFetching} >
                {isFetching ? (
                  "Loading....."
                ) : (
                  "Log In"
                )}
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton" onClick={() => navigate('/register')} disabled={isFetching}>
                {isFetching ? (
                  "Loading...."
                ) : (
                  "Create a New Account"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
