import React from 'react';

const ProfilePicture = (props) => {
  const {picture, alt} = props
  return <div className='profile-picture'>
    <img src={picture} alt={alt} className="profile-picture__image" />
  </div>;
};

export default ProfilePicture;
