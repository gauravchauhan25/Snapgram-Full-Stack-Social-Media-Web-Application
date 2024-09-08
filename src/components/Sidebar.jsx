import React, { useState } from 'react'

const categories = [
  { name: 'Home', icon: <span><i><span className="material-symbols-outlined">
      house
    </span></i></span>, },
  {
    name: 'Explore', icon: <span><i><span className="material-symbols-outlined">
      explore
    </span></i></span>,
  },
  {
    name: 'Notification', icon: <span><i><span className="material-symbols-outlined">
      notifications
    </span>
    </i></span>,
  },
  {
    name: 'Messages', icon: <span><i><span className="material-symbols-outlined">
      mail
    </span></i></span>,
  },
  {
    name: 'Requests', icon: <span><i><span className="material-symbols-outlined">
      favorite
    </span></i></span>,
  },
  {
    name: 'Create', icon: <span><i><span className="material-symbols-outlined">
      add_box
    </span></i></span>
  },
  {
    name: 'Reels', icon: <span><i><span className="material-symbols-outlined">
      movie
    </span></i></span>,
  },
  {
    name: 'Settings', icon: <span><i><span className="material-symbols-outlined">
      settings
    </span></i></span>,
  }
];

export default function Sidebar(props) {

  const [selectedCategory, setSelectedCategory] = useState("Home");

  return (
    <>
      <div className="left">
        <a className="profile">
          <div className="profile-photo">
            <img src="" alt="" />
          </div>

          <div className="handle">
            <h4>{props.username}</h4>
            <p className="text-muted">
              {props.userid}
            </p>
          </div>
        </a>


        <div className="sidebar">
          {categories.map((category) => (
            <a className="menu-item" onClick={() => setSelectedCategory(category.name)}
              style={{
                background: category.name === selectedCategory && "hsl(252, 67%, 51%)",
                color: "white"
              }} key={category.name}><h3>{category.icon} {category.name}</h3></a>
          ))}
        </div>

        <label className="btn btn-primary">Create Post</label>
      </div >
    </>
  );
}
