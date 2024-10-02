import React from "react";

export default function Notification() {
  return (
    <>
      <h2 classNameName="text-muted">Notifications</h2>

      <div className="notification-container">
        <div className="request">
          <div className="profile-photo">
            <img
              src="https://i.pinimg.com/236x/43/0a/20/430a202a522c673f3ccc48e6ff844163.jpg"
              alt=""
            />
          </div>

          <div className="notification-body">
            <p>
              <b>Chris Evans</b> started following you
            </p>
            <small className="text-muted">2 minutes ago</small>
          </div>
        </div>

        <div className="request">
          <div className="profile-photo">
            <img
              src="https://i.pinimg.com/236x/43/0a/20/430a202a522c673f3ccc48e6ff844163.jpg"
              alt=""
            />
          </div>

          <div className="notification-body">
            <p>
              <b>Tom Holland</b> accepted your friend request
            </p>
            <small className="text-muted">10 minutes ago</small>
          </div>
        </div>

        <div className="request">
          <div className="profile-photo">
            <img
              src="https://i.pinimg.com/236x/43/0a/20/430a202a522c673f3ccc48e6ff844163.jpg"
              alt=""
            />
          </div>

          <div className="notification-body">
            <p>
              <b>RDJ </b> liked your post
            </p>
            <small className="text-muted">10 hours ago</small>
          </div>
        </div>
      </div>
    </>
  );
}
