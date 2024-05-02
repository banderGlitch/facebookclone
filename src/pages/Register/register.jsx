import './register.css'
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
export default function Register() {

  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address format")
      .required("Email is required"),
    username: yup.string().required("Username is required!"),
    password: yup.string().required("Password is required!"),
    repassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      repassword: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm()
      console.log("values", values)
    },
  });
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={formik.handleSubmit} >
            <div className="loginBox">
              <input placeholder="Username" className="loginInput" name="username" onChange={formik.handleChange} />
              <p className="WarningParagraph">{formik.touched.username && formik.errors.username}</p>
              <input placeholder="Email" className="loginInput" name="email" onChange={formik.handleChange} />
              <p className="WarningParagraph">{formik.touched.email && formik.errors.email}</p>
              <input placeholder="Password" type='password' className="loginInput" name="password" onChange={formik.handleChange} />
              <p className="WarningParagraph">{formik.touched.password && formik.errors.password}</p>
              <input placeholder="Password Again" type='password' className="loginInput" name="repassword" onChange={formik.handleChange} />
              <p className="WarningParagraph">{formik.touched.repassword && formik.errors.repassword}</p>
              <button className="loginButton" type="submit">Sign Up</button>
              <button className="loginRegisterButton" onClick={() => navigate("/login")}>
                Log into Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}