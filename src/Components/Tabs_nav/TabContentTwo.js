import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/tab-tv.png";
import img2 from "../../images/tab-tablet.png";
import img3 from "../../images/tab-macbook.png";

function TabContentTwo() {
  return (
    <div className="tab2-bgcont">
      <div className="tab2-container">
        <div className="tab2-container1">
          <p style={{ marginLeft: "-38rem", marginTop: "1rem" }}>
            Watch Tv shows and movies anytime,anywhere -Personalized for you
          </p>
          <Link to="/" className="trybtn1" style={{ marginRight: "-35rem" }}>
            TRY IT NOW
          </Link>
        </div>
        <div className="tab2-container2">
          <div className="tv1">
            <img src={img1} className="imgsize" alt="tv"></img>
            <div className="h1p1flex" style={{ marginRight: "70px" }}>
              <h3>Watch on your tv</h3>
              <p className="ptag">
                Smart TVs,PlayStation,Xbox,Chromecast,Apple Tv,Blu-ray players
                and more.
              </p>
            </div>
          </div>
          <div className="tv2">
            <img src={img2} className="imgsize" alt="Tab"></img>
            <div className="h1p1flex">
              <h3>Watch instantly or download for later</h3>
              <p className="ptag">Available on phone or download for later.</p>
            </div>
          </div>
          <div className="tv3">
            <img src={img3} className="imgsize" alt="macbook"></img>
            <div className="h1p1flex">
              <h3>Use any Computer</h3>
              <p className="ptag">Watch right on Netflix.com.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabContentTwo;
