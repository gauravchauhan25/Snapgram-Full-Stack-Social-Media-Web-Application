import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Middle from "./components/Middle";

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
        </div>
      </main>
    </>
  );
};

export default App;
