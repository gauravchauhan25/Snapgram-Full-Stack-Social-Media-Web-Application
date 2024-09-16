import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Stories from './components/Stories';

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
                              <Stories />
                              <Feed />
                         </div>

                    </div>
               </main>
          </>
     );
};

export default App;
