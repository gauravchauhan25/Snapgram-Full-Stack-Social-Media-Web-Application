import React, { useState, useEffect } from "react";
import { feeds } from "../sources/constants";

export default function Feed() {
  const [feedList, setFeedList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const feedsPerPage = 3;

  // Load the initial feeds
  useEffect(() => {
    loadMoreFeeds();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load more feeds when the page changes
  useEffect(() => {
    if (page > 1) loadMoreFeeds();
  }, [page]);

  // Function to load more feeds
  const loadMoreFeeds = () => {
    setLoading(true);

    setTimeout(() => {
      const newFeeds = feeds.slice(
        (page - 1) * feedsPerPage,
        page * feedsPerPage
      );
      setFeedList((prevFeeds) => [...prevFeeds, ...newFeeds]);
      setLoading(false);
    }, 3000);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      if (!loading) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  return (
    <div>
      <div className="feeds">
        {feedList.map((feed) => (
          <div className="feed" key={feed.id}>
            {/* Feed content remains the same */}
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

      {/* Spinner */}
      {loading && (
        <div className="spinner">
          <img
            src="https://media.tenor.com/hQz0Kl373E8AAAAi/loading-waiting.gif"
            alt="Loading..."
          />
        </div>
      )}
    </div>
  );
}
