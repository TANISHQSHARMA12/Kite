import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
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
        "http://localhost:3002/auth/signup",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="form_container">
      <div className="container-fluid">
      <div
        className="row p-5"
        style={{
          width: "80%",
          textAlign: "center"
        }}
      >
        <h2 className="p-3 fs-2 " style={{marginLeft:"80px",textAlign: "center",fontFamily:"-apple-system"}}>Open a free demat and trading account online</h2>
        <h4  className="p-1" style={{marginLeft:"75px"}}>
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h4>
      </div>
      <div className="row flex" style={{textAlign:"center"}}>
        <div className="col-3 p-3" style={{textAlign:"center"}}>
          <img   src="Media/account_open.svg" style={{width:"500px"}}></img>
        </div>
        <div className="col-3"></div>
        <div className="col-4 p-5 "  >
      <h3 className="text-muted">Signup Now</h3>
      <p className="text-muted mb-4" style={{ fontSize: '14px', color: '#9b9b9b' }}>
    Or track your existing application
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
          <label htmlFor="email">Username &nbsp; &nbsp;</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
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
        <button  type="submit" class="btn btn-primary mt-1">Submit</button>
         <hr/>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      </div>
       
      </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
