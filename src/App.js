import React from 'react';
import  Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Feed from './components/Feed';

const App = () => {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Feed />
    </>
  );
};

export default App;
