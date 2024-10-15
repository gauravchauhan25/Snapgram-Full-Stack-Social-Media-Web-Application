import React, { useState } from "react";

const Post = ({ username, imageUrl, caption, likes, hashtags }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-username">{username}</div>
      </div>
      <div className="post-image">
        <img src={imageUrl} alt={caption} />
      </div>
      <div className="post-footer">
        <div className="post-caption">
          <strong>{username}</strong> {caption}
        </div>
        <div className="post-hashtags">
          {hashtags.map((hashtag, index) => (
            <span key={index} className="hashtag">
              #{hashtag}{" "}
            </span>
          ))}
        </div>
        <div className="post-likes">
          <button onClick={handleLike}>{liked ? "Unlike" : "Like"}</button>
          <span>{likeCount} likes</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
