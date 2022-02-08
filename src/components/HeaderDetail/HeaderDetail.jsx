import React from 'react';
import "./HeaderDetail.scss";
import ProfilePicture from '../ProfilePicture/ProfilePicture';

const HeaderDetail = (props) => {
  const {username} = props
  return <div className='header-detail'>
    <ProfilePicture
          picture="https://placekitten.com/90/90"
          alt="profile pic"
        />
    <div className='header-detail__name'>
      <h2>{username}</h2>
    </div>
  </div>;
};

export default HeaderDetail;
