import React from "react";
import { feeds } from "../sources/constants";

export default function Feed() {
  return (
    <div>
      <div className="feeds">
        {feeds.map((feed) => (
          <div className="feed" key={feed.id}>
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src={feed.imgProfileUrl} alt="" />
                </div>

                <div className="ingo">
                  <h3>{feed.username}</h3>
                  <small>{feed.location}</small>
                </div>
              </div>

              <span className="edit">
                <i>
                  <span className="material-symbols-outlined">more_vert</span>
                </i>
              </span>
            </div>

            <div className="photo">
              <img src={feed.imageUrl} alt="" />
            </div>

            <div className="action-button">
              <div className="interaction-buttons">
                <span>
                  <span className="material-symbols-outlined">favorite</span>
                </span>
                <span>
                  <i className="fa-regular fa-comment-dots fa-sm"></i>
                </span>

                <span>
                  <span className="material-symbols-outlined">share</span>
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="fa-regular fa-bookmark"></i>
                </span>
              </div>
            </div>

            <div className="liked-by">
              <span>
                <img src={feed.likedBy1Profile} alt="" />
              </span>
              <span>
                <img src={feed.likedBy2Profile} alt="" />
              </span>
              <span>
                <img src={feed.likedBy3Profile} alt="" />
              </span>
              <p>
                Liked by <b> {feed.likedBy} </b> and{" "}
                <b>{feed.likeCount} others</b>
              </p>
            </div>

            <div className="caption">
              <p>
                <b>{feed.name}</b> {feed.caption}
                <span className="harsh-tag"> {feed.hashtags}</span>
              </p>
            </div>
            <div className="comments text-muted">
              <a href="#">View all {feed.comments} comments</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
