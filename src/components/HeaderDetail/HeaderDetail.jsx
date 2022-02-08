import React from "react";
import "./HeaderDetail.scss";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

const HeaderDetail = (props) => {
  const { username } = props;
  return (
    <div className="header-detail">
      <ProfilePicture
        picture="https://placekitten.com/77/77"
        alt="profile pic"
      />
      <div className="header-detail__name">
        <h2>{username}</h2>
        <div className="header-detail__button">
          <button typeof="button" className="follow-btn">
            Follow
          </button>
          <button typeof="button" className="more-btn">
            ˅
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetail;
