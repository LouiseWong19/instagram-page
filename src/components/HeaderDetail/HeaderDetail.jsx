import React from "react";
import "./HeaderDetail.scss";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import user from "../../assets/data/data";

const HeaderDetail = (props) => {
  const { username } = props;
  return (
    <div className="header-detail">
      <ProfilePicture
        image={user.imageSrc}
        alt={user.alt}
      />
      <div className="header-detail__name">
        <h2>{username}</h2>
        <div className="header-detail__button">
          <button typeof="button" className="follow-btn">
            Follow
          </button>
          <button typeof="button" className="more-btn">
            v
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetail;
