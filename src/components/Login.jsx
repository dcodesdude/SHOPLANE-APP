import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../schemas/loginSchema";
import { TbLogin } from "react-icons/tb";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log("🚀 ~ file: Login.jsx:13 ~ Login ~ values:", values);
        alert("Login Successful");
        navigate("/");
        action.resetForm();
      },
    });

  return (
    <>
      <div className="formDivContainer">
        <div className="card formContainer">
          <form onSubmit={handleSubmit}>
            <div className="formDiv">
              <h2>LOGIN</h2>
              <div className="form-input">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p style={{ color: "red" }}>{errors.email}</p>
                ) : null}
              </div>
              <div className="form-input">
                {/* <label htmlFor="password">Password</label> */}
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p style={{ color: "red" }}>{errors.password}</p>
                ) : null}
              </div>
              <div>
                <button type="submit" className="btn btn-primary loginPageBtn">
                  <TbLogin size={"20px"} />
                  Login
                </button>
              </div>
              <p>
                Don't have an account? Sign up <Link to={"/signup"}>here.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
