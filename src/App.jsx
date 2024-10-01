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
              <Route path="/Home" element={<Middle />} />
              <Route path="/Search" element={<Search />} />
              {/* <Route path="/Explore" element={<Explore />} /> */}
              <Route path="/Notification" element={<Notification />} />
            </Routes>
          </div>

          <div className="right">
            <Right />
          </div>
        </div>
      </main>
    </Router>
  );
}
