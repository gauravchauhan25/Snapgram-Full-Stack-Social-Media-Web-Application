import React from 'react'
// import  '../script';

export default function MainBody() {
        return (
                <>
                        <div className="main-body">
                                <div className="search-influencers" id="influencers">
                                        <p className="text-muted" id="artist">Search for your favourite artist!</p>
                                        <div className="influencer">
                                                <img src="img/chris-hemsworth-profile.jpg" alt="" className="profile-photo" />
                                                <h4>Chris Hemsworth</h4>
                                        </div>

                                        <div className="influencer">
                                                <img src="img/rosamund-profile.jpg" alt="" className="profile-photo" />
                                                <h4>Rosamund Pike</h4>
                                        </div>

                                        <div className="influencer">
                                                <img src="img/tom-holland-profile.jpg" alt="" className="profile-photo" />
                                                <h4>Tom Holland</h4>
                                        </div>

                                        <div className="influencer">
                                                <img src="img/lionel-profile.jpg" alt="" className="profile-photo" />
                                                <h4>Lionel Messi</h4>
                                        </div>

                                        <div className="influencer">
                                                <img src="img/jennifer-lawrence.jpeg" alt="" className="profile-photo" />
                                                <h4>Jennifer Lawrence</h4>
                                        </div>

                                        <div className="influencer">
                                                <img src="img/anne-hathaway.jpeg" alt="" className="profile-photo" />
                                                <h4>Anne Hathaway</h4>
                                        </div>

                                        <div className="influencer">
                                                <img src="img/chris-evans-profile.jpg" alt="" className="profile-photo" />
                                                <h4>Chris Evans</h4>
                                        </div>
                                </div>
                        </div>
                </>
        );
}