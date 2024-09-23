import React, { useState } from "react";
import { categories } from "../sources/categories";

export default function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState("Home");

  return (
    <>
      <div className="left">
        <div className="sidebar">
          {categories.map((category) => (
            <a
              className={`menu-item ${
                selectedCategory === category.name ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.name)}
              key={category.name}
            >
              <span>{category.icon}</span>
              <h3>{category.name}</h3>
            </a>
          ))}
        </div>

        <label className="btn btn-primary">Create Post</label>
      </div>
    </>
  );
}
