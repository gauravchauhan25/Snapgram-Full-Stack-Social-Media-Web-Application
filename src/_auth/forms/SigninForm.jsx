import React, { useState } from "react";
import { account } from "../../services/appwrite";
import { Link } from "react-router-dom";
import "./signup.css";

const signIn = async (email, password) => {
  try {
    const response = await account.createSession(email, password);
    console.log("User logged in successfully:", response);
    return response;
  } catch (error) {
    console.error("Error during sign-in:", error.message);
    throw error;
  }
};

const SigninForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await signIn(username, password);
      alert("Login successful!");
      console.log(response);
    } catch (error) {
      alert("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

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

        <h4>User Login</h4>
        <p>To use Snapgram, please login!</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="email"
            className=""
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className=""
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn-signup" disabled={loading}>
            {loading ? "Logging In..." : "Log In"}
          </button>
          <p>OR</p>
          <button
            type="button"
            className="btn-google"
            onClick={() => alert("Google Sign-In coming soon!")}
          >
            Sign In with Google!
          </button>

          <p>
            Don't have an account?{" "}
            <Link to="/sign-up" className="login-badge">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      <div className="back-image">
        <img
          src="https://img.freepik.com/free-photo/customer-experience-creative-collage_23-2149371194.jpg?semt=ais_hybrid"
          alt="background"
        />
      </div>
    </div>
  );
};

export default SigninForm;
