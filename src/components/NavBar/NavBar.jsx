import React from "react";
import AddIcon from "../NavBarIcon/AddIcon";
import CompassIcon from "../NavBarIcon/CompassIcon";
import HeartIcon from "../NavBarIcon/HeartIcon";
import HomeIcon from "../NavBarIcon/HomeIcon";
import InstagramWordIcon from "../NavBarIcon/InstagramWordIcon";
import SendIcon from "../NavBarIcon/SendIcon";
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
    </div>
  );
};

export default NavBar;
