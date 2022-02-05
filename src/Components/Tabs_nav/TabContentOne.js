import React from "react";
import { Link } from "react-router-dom";
import Img from "../../images/tab-1-pic.png";
import "./TabContent.css";
import { Icon } from "react-icons-kit";
import { ic_navigate_next } from "react-icons-kit/md/ic_navigate_next";

function TabContentOne() {
  return (
    <div>
      <div className="container">
        <div className="tab-content">
          <span>
            If you decide netflix isn't for you.You can cancel at anytime
          </span>
          <Link to="/" className="trybtn">
            Try it now
            <Icon className="iconn" icon={ic_navigate_next} size={34}></Icon>
          </Link>
        </div>
        <img src={Img} className="imgclassone" alt="try itt now"></img>
      </div>
    </div>
  );
}

export default TabContentOne;
