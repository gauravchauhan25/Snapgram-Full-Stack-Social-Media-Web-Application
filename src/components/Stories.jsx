import React from 'react'

function Stories() {
      return (
            <>
                  <div class="stories">
                        <button id="scroll-left" class="scroll-button left"><span class="material-symbols-outlined">
                              arrow_back_ios
                        </span></button>

                        <div class="story">
                              <div class="profile-photo">
                                    <img src="./img/profile.jpg" alt="" />
                              </div>
                              <p class="name">Your Story</p>
                        </div>

                        <div class="story">
                              <div class="profile-photo">
                                    <img src="./img/lionel-profile.jpg" alt="" />
                              </div>
                              <p class="name">Lionel Messi</p>
                        </div>

                        <button id="scroll-right" class="scroll-button right"><span class="material-symbols-outlined">
                              arrow_forward_ios
                        </span></button>
                  </div>
            </>
      )
}

export default Stories
