import React from "react";
import Sidebar from "./Sidebar";
import Middle from "./Middle";
import Right from "./Right";

export default function Home() {
  return (
    <>
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
}
