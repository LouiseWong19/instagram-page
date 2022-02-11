import React from "react";
import AddIcon from "../NavBarIcon/AddIcon";
import CompassIcon from "../NavBarIcon/CompassIcon";
import HeartIcon from "../NavBarIcon/HeartIcon";
import HomeIcon from "../NavBarIcon/HomeIcon";
import InstagramWordIcon from "../NavBarIcon/InstagramWordIcon";
import SendIcon from "../NavBarIcon/SendIcon";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__icons">
        <InstagramWordIcon />
      </div>
      <div className="navbar__icons">
        <HomeIcon />
      </div>
      <div className="navbar__icons">
        <SendIcon />
      </div>
      <div className="navbar__icons">
        <AddIcon />
      </div>
      <div className="navbar__icons">
        <CompassIcon />
      </div>
      <div className="navbar__icons">
        <HeartIcon />
      </div>
      <div className="navbar__profile-icon">
        <ProfilePicture image="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="my profile picture" />
      </div>
    </div>
  );
};

export default NavBar;
