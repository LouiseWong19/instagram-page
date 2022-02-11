import React from "react";
import "./ProfileDetail.scss";

const ProfileDetail = (props) => {
  const { posts, followers, following } = props;
  return (
    <div className="profile-detail">
      <div className="profile-detail__items">
        <p>{posts}</p>
        <h3>posts</h3>
      </div>
      <div className="profile-detail__items">
        <p>{followers}</p>
        <h3>followers</h3>
      </div>
      <div className="profile-detail__items">
        <p>{following}</p>
        <h3>following</h3>
      </div>
    </div>
  );
};

export default ProfileDetail;
