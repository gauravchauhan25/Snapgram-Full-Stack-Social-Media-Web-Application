import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assuming you have a Navbar component
import Sidebar from "./components/Sidebar";
import Middle from "./components/Middle";
import Right from "./components/Right";
import Search from "./components/Search";
import Home from "./components/Home";

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
              <Route exact path="/" component={<Home />} />
              <Route path="/Search" component={<Search />} />
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
