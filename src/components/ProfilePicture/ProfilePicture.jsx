import React from "react";
import "./ProfilePicture.scss";

const ProfilePicture = (props) => {
  const { image, alt } = props;
  return (
    <div className="profile-picture">
      <img src={image} alt={alt} className="profile-picture__image" />
    </div>
  );
};

export default ProfilePicture;
