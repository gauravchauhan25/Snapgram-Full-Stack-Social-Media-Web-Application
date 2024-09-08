import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Feed from './components/Feed';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="left">
            <Sidebar username='Chauhan' userid='@gaurav025'/>
          </div>

          <div className="middle">
            <Feed />
          </div>

        </div>
      </main>
    </>
  );
};

export default App;
