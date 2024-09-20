import React from "react";
import { stories } from "../sources/constants";

export default function Stories() {
  return (
    <>
      <div class="stories">
        <button id="scroll-left" class="scroll-button left">
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>

        {/* Loop for creating mutiple stories */}
        {stories.map((story) => (
          <div class="story" key={story.id}>
            <div class="profile-photo">
              <img src={story.imageUrl} alt="storyImg" />
            </div>
            <p class="name">{story.name}</p>
          </div>
        ))}

        <button id="scroll-right" class="scroll-button right">
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </>
  );
}
