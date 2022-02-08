import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import "./Highlight.scss";

const Highlight = (props) => {
  const {highlight, caption} = props
  return <div className='highlight'>
    <ProfilePicture picture={highlight} />
    <p>{caption}</p>
  </div>;
};

export default Highlight;
