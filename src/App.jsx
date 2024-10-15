import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Middle from "./components/Middle";
import Right from "./components/Right";
import Search from "./components/Search";
import Explore from "./components/Explore";
import Notification from "./components/Notification";
import Profile from "./components/Profile";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <div className="container">
          <div className="left">
            <Sidebar />
          </div>

          <div className="middle">
            <Routes>
              <Route path="/" element={<Middle />} />
              <Route path="/Home" element={<Middle />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/Notification" element={<Notification />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          </div>

          <div className="right">
            <Routes>
              <Route path="/" element={<Right />} />
              <Route path="/Home" element={<Right />} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
}
