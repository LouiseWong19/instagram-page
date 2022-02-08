import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import "./Highlight.scss";

const Highlight = (props) => {
  const {user} = props
  return (
  <div className='highlight'>
    {user.highlight.map((highlights)=>{
      return  <div className='highlight__item'>
        <ProfilePicture image={highlights.imageSrc} />
        <p>{highlights.text}</p>
        </div>
    })}



  </div>
  )
};

export default Highlight;
