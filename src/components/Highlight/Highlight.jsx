import React from "react";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import "./Highlight.scss";

const Highlight = (props) => {
  const { user } = props;

  const highlight = user.highlight.map((highlights) => (
    <div key={highlights.id} className="highlight__item">
      <ProfilePicture image={highlights.imageSrc} />
      <p>{highlights.text}</p>
    </div>
  ));
  return <div className="highlight">{highlight}</div>;
};

export default Highlight;
