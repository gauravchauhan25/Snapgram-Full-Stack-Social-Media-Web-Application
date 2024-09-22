import React, { useState } from "react";
import { categories } from "../sources/categories";

export default function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState("Home");

  return (
    <>
      <div className="left">
        <div className="sidebar">
          z
          {categories.map((category) => (
            <a
              className="menu-item"
              onClick={() => setSelectedCategory(category.name)}
              style={{
                background:
                  category.name === selectedCategory && "hsl(252, 67%, 51%)",
                color: "white",
              }}
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
