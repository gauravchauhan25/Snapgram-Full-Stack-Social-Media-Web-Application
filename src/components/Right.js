import React from 'react'
// import  '../script';

export default function Right() {
        return (
                <>
                        <div className="right">
                                <div className="messages" id="messages">
                                        <div className="heading">
                                                <h4>Messages</h4>
                                                {/* <i className="fa-regular fa-pen-to-square" style="color: #ffffff;"></i> */}
                                        </div>

                                        <div className="search-bar">
                                                {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                                                <input type="search" placeholder="Search Mesaages" id="message-search" />
                                        </div>

                                        <div className="category">
                                                <h6 className="active">Primary</h6>
                                                <h6>General</h6>
                                                <h6 className="message-requests">Requests(9+)</h6>
                                        </div>

                                        <div className="message">
                                                <div className="profile-photo">
                                                        <img src="img/anne-hathaway.jpeg" alt="" />
                                                        <div className="active"></div>
                                                </div>

                                                <div className="message-body">
                                                        <h5>Anne Hathaway</h5>
                                                        <p className="text-bold">3 new messages</p>
                                                </div>
                                        </div>

                                        <div className="message">
                                                <div className="profile-photo">
                                                        <img src="img/lionel-profile.jpg" alt="" />
                                                </div>

                                                <div className="message-body">
                                                        <h5>Lionel Messie</h5>
                                                        <p className="text-bold">Just woke up!</p>
                                                </div>
                                        </div>

                                        <div className="message">
                                                <div className="profile-photo">
                                                        <img src="img/rdj.jpeg" alt="" />
                                                        <div className="active"></div>
                                                </div>

                                                <div className="message-body">
                                                        <h5>Robert Downey Jr.</h5>
                                                        <p className="text-bold">Hey bro! How's ur day today?</p>
                                                </div>
                                        </div>


                                        <div className="message">
                                                <div className="profile-photo">
                                                        <img src="img/rosamund-profile.jpg" alt="" />
                                                </div>

                                                <div className="message-body">
                                                        <h5>Rosamund Pike</h5>
                                                        <p className="text-bold">Are you free today!</p>
                                                </div>
                                        </div>

                                        <div className="message">
                                                <div className="profile-photo">
                                                        <img src="img/tom-holland-profile.jpg" alt="" />
                                                </div>

                                                <div className="message-body">
                                                        <h5>Tom Holland</h5>
                                                        <p className="text-bold">3 new messages</p>
                                                </div>
                                        </div>

                                        <div className="message">
                                                <div className="profile-photo">
                                                        <img src="img/chris-hemsworth-profile.jpg" alt="" />
                                                        <div className="active"></div>
                                                </div>

                                                <div className="message-body">
                                                        <h5>Chris Hemsworth</h5>
                                                        <p className="text-bold">Active Now</p>
                                                </div>
                                        </div>
                                </div>

                                <div className="friend-requests" id="friend-requests">
                                        <h4>Requests</h4>
                                        <div className="request">
                                                <div className="info">
                                                        <div className="profile-photo">
                                                                <img src="img/rosamund-profile.jpg" alt="" />
                                                        </div>

                                                        <div>
                                                                <h5>Rosamund Pike</h5>
                                                                <p className="text-muted">5 mutual friends</p>
                                                        </div>
                                                </div>
                                                <div className="action">
                                                        <button className="btn btn-primary">Accept</button>
                                                        <button className="btn">Decline</button>
                                                </div>
                                        </div>

                                        <div className="request">
                                                <div className="info">
                                                        <div className="profile-photo">
                                                                <img src="img/anne-hathaway.jpeg" alt="" />
                                                        </div>

                                                        <div>
                                                                <h5>Anne Hathaway</h5>
                                                                <p className="text-muted">10+ mutual friends</p>
                                                        </div>
                                                </div>
                                                <div className="action">
                                                        <button className="btn btn-primary">Accept</button>
                                                        <button className="btn">Decline</button>
                                                </div>
                                        </div>

                                        <div className="request">
                                                <div className="info">
                                                        <div className="profile-photo">
                                                                <img src="img/chris-evans-profile.jpg" alt="" />
                                                        </div>

                                                        <div>
                                                                <h5>Chris Evans</h5>
                                                                <p className="text-muted">1 mutual friend</p>
                                                        </div>
                                                </div>
                                                <div className="action">
                                                        <button className="btn btn-primary">Accept</button>
                                                        <button className="btn">Decline</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        );
}