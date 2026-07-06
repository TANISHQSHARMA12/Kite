import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3002/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      // backend sometimes returns { success: true } and sometimes { message }
      if (data?.success) {
        handleSuccess(data.message || "Login successful");
        setTimeout(() => {
          window.location.href = "http://localhost:3001/";
        }, 900);
      } else {
        // fallback: treat any returned message as error
        handleError(data?.message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      handleError("Login request failed");
    }
  };

  return (
    <div className="form_container">
      <div className="container-fluid">
        <div
          className="row p-5"
          style={{ width: "80%", textAlign: "center" }}
        >
        </div>

        <div className="row flex" style={{ textAlign: "center" }}>
          <div className="col-2"></div>

          <div className="col-4 p-5">
            <h3 className="text-muted">Login</h3>
            <p
              className="text-muted mb-4"
              style={{ fontSize: "14px", color: "#9b9b9b" }}
            >
              Enter your credentials to continue.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="m-2">
                <label htmlFor="email">Email &nbsp; &nbsp;</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="m-2">
                <label htmlFor="password">Password &nbsp; &nbsp;</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required
                />
              </div>

              <button type="submit" class="btn btn-primary mt-1">
                Submit
              </button>

              <hr />
              <span>
                Don’t have an account? <Link to={"/Signup"}>Signup</Link>
              </span>
            </form>
          </div>

          <div className="col-1"></div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;

