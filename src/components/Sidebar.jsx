import React, { useState } from 'react'
import { categories } from '../sources/categories';

export default function Sidebar() {
     const [selectedCategory, setSelectedCategory] = useState("Home");

     return (
          <>
               <div className="left">
                    {/* <a className="profile">
                         <div className="profile-photo">
                              <img src="" alt="" />
                         </div>

                         <div className="handle">
                              <h4>{props.username}</h4>
                              <p className="text-muted">
                                   {props.userid}
                              </p>
                         </div>
                    </a> */}

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
