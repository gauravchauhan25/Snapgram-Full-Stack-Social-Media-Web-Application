import React from 'react'

function Navbar() {
      return (
            <>
                  <nav>
                        <div className="container">
                              <h2 className="logo">
                                   <img src="" alt="" />
                                     socialShots
                              </h2>

                              <div className="search-bar" >
                                   <i className="fa-solid fa-magnifying-glass"></i>
                                    <input type="search" name="search" placeholder="Search for influencer" />
                              </div>

                              <div className="theme-toggler">
                                    <span className="material-icons-sharp ">
                                          <i className="fa-solid fa-sun"></i>
                                    </span>

                                    <span className="material-icons-sharp active">
                                          <i className="fa-solid fa-moon" style="color: #030303;"></i>
                                    </span>
                              </div>

                              <div className="create">
                                    <div className="profile-photo">
                                          <img src="" alt="" />
                                    </div>
                              </div>
                        </div>
                  </nav>
            </>
      );
}

export default Navbar;