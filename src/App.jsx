import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./_root/Home";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import Search from "./components/Search";
import Notification from "./components/Notification";
import Profile from "./components/Profile";

const isAuthenticated = () => {
  var isAuth = false;

  // return !!localStorage.getItem("authToken");
  return isAuth;
};

export default function App() {
  return (
    <Routes>
      {/* Authentication Routes */}
      <Route element={<AuthLayout />}>
        <Route
          path="/sign-in"
          element={
            isAuthenticated() ? <Navigate to="/" replace /> : <SigninForm />
          }
        />
        <Route
          path="/sign-up"
          element={
            isAuthenticated() ? <Navigate to="/" replace /> : <SignupForm />
          }
        />
      </Route>

      {/* Root Layout and Protected Routes */}
      <Route element={<RootLayout />}>
        <Route
          index
          element={
            isAuthenticated() ? <Home /> : <Navigate to="/sign-in" replace />
          }
        />
        <Route
          path="/Home"
          element={
            isAuthenticated() ? <Home /> : <Navigate to="/sign-in" replace />
          }
        />
        <Route
          path="/Search"
          element={
            isAuthenticated() ? <Search /> : <Navigate to="/sign-in" replace />
          }
        />
        <Route
          path="/Notification"
          element={
            isAuthenticated() ? (
              <Notification />
            ) : (
              <Navigate to="/sign-in" replace />
            )
          }
        />
        <Route
          path="/Profile"
          element={
            isAuthenticated() ? <Profile /> : <Navigate to="/sign-in" replace />
          }
        />
      </Route>
    </Routes>
  );
}
