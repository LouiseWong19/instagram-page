import React from "react";
import "./Bio.scss";

const Bio = (props) => {
  const { name, bio, website } = props;
  return (
    <div className="bio">
      <h3>{name}</h3>
      <p>{bio}</p>
      <a href={website}>{website}</a>
    </div>
  );
};

export default Bio;
