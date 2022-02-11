import React from "react";
import GridIcon from "../GridNavBarIcon/GridIcon";
import PlayIcon from "../GridNavBarIcon/PlayIcon";
import TagIcon from "../GridNavBarIcon/TagIcon";
import VideoIcon from "../GridNavBarIcon/VideoIcon";
import "./GridNavBar.scss";

const GridNavBar = () => {
  return (
    <div className="grid-navbar">
      <GridIcon />
      <VideoIcon />
      <PlayIcon />
      <TagIcon />
    </div>
  );
};

export default GridNavBar;
