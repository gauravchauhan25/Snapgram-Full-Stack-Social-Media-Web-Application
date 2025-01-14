import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Right from "../components/Right";
import Home from "./Home";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="left">
            <Sidebar />
          </div>

          <div className="middle">
            <Outlet />
          </div>

          <div className="right">
            <Routes>
              <Route path="/" element={<Right />} />
              <Route path="/Home" element={<Right />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}
