import React from "react";
import profilePhoto from "../img/profile-photo.jpg";
import Post from "../components/Posts";

const Profile = () => {
  const user = {
    username: "Gaurav Chauhan",
    fullName: "__gauravchauhan_",
    bio: `👑ɠąųཞą۷ ʂıŋɠɧ ƈɧąųɧąŋ 👑,
      ɾɑϳϼựʈ,
      20 || ɖɛƖɧıɬɛ,
      MSI 👨‍🎓,
      ຟiŞh ๓ē ໐ຖ 25 Şēptē๓๖ēr🥳,
      hคppiຖēŞŞ คlຟคฯŞ😉☺️😝`,
    followers: 1580,
    following: 200,
    posts: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
  };

  return (
    <>
      <div className="center profile-container">
        <div className="profile-header">
          <div className="profile-picture">
            <img src={profilePhoto} alt={`${user.username}'s profile`} />
          </div>

          <div className="profile-info">
            <div className="edit-profile">
              <h4>{user.fullName}</h4>
              <button className="btn btn-primary">Follow</button>
            </div>

            <div className="profile-description large">
              <p
                dangerouslySetInnerHTML={{
                  __html: user.bio.replace(/,/g, ",<br />"),
                }}
              ></p>
              <div className="follower-info">
                <span>
                  <strong>{user.posts.length}</strong> Posts
                </span>
                <span>
                  <strong>{user.followers}</strong> Followers
                </span>
                <span>
                  <strong>{user.following}</strong> Following
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-description small">
          <p
            dangerouslySetInnerHTML={{
              __html: user.bio.replace(/,/g, ",<br />"),
            }}
          ></p>
          <div className="follower-info">
            <span>
              <strong>{user.posts.length}</strong> Posts
            </span>
            <span>
              <strong>{user.followers}</strong> Followers
            </span>
            <span>
              <strong>{user.following}</strong> Following
            </span>
          </div>
        </div>
      </div>

      {/* <Post /> */}
    </>
  );
};

export default Profile;
