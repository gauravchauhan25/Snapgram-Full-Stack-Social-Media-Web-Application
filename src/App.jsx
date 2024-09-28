import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Middle from "./components/Middle";
import Right from "./components/Right";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="left">
            <Sidebar />
          </div>

          <div className="middle">
            <Middle />
          </div>

          <div className="right">
            <Right />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
