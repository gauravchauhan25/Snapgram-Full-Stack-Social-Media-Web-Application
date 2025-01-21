import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import SigninForm from "./SigninForm";

const SignupForm = () => {
  return (
    <div className="signup-main">
      <div className="signup-container">
        <div className="logo-s">
          <img
            src="https://cdn-icons-png.flaticon.com/128/185/185985.png"
            className="logo-snapgram"
            alt="logo"
          />
          <h3>Snapgram</h3>
        </div>

        <h4>Create a new Account</h4>
        <p>To use snapgram, Please enter your details!</p>

        <form action="">
          <label for="name">Name</label>
          <input type="text" className="" placeholder="Your Name" />

          <label for="username">Username</label>
          <input type="username" className="" placeholder="@username" />

          <label for="email">Email</label>
          <input type="email" className="" placeholder="you@gmail.com" />

          <label for="password">Password</label>
          <input type="password" className="" placeholder="Password" />

          <button className="btn-signup">Sign Up</button>
          <p>OR</p>
          <button className="btn-google">Sign up with Google!</button>

          <p>
            Already have a account?{" "}
            <Link to="/sign-in" className="login-badge">
              Log In
            </Link>
          </p>
        </form>
      </div>

      <div className="back-image">
        <img
          src="https://img.freepik.com/free-photo/customer-experience-creative-collage_23-2149371194.jpg?semt=ais_hybrid"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignupForm;
