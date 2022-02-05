import React, { useState } from "react";
import "./Components.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { globe } from "react-icons-kit/fa/globe";
import { chevronUp } from "react-icons-kit/fa/chevronUp";

function Footer() {
  const [toggle, settoggle] = useState(false);
  const handletoggle = (e) => {
    e.preventDefault();
    settoggle(!toggle);
  };
  return (
    <div>
      <div className="footerlinks">
        <Link to="/" className="Questioncall">Qustions?Call 9865074999</Link>
        <div className="faqcontent">
          <Link to="/" className="grid-item">FAQ</Link>
          <Link to="/" className="grid-item">Help center</Link>
          <Link to="/" className="grid-item">Account</Link>
          <Link to="/" className="grid-item">Media Center</Link>
          <Link to="/" className="grid-item">Investor Relations</Link>
          <Link to="/" className="grid-item">Jobs</Link>
          <Link to="/" className="grid-item">Ways to watch</Link>
          <Link to="/" className="grid-item">Terms of Use</Link>
          <Link to="/" className="grid-item">Privacy</Link>
          <Link to="/" className="grid-item">Cookie Preferences</Link>
          <Link to="/" className="grid-item">Corporate Information</Link>
          <Link to="/" className="grid-item">Contact Us</Link>
          <Link to="/" className="grid-item">Speed Test</Link>
          <Link to="/" className="grid-item">Legal Notices</Link>
          <Link to="/" className="grid-item">Netflix Originals</Link>
        </div>
        <div className="langclass" onClick={handletoggle}>
            {/* use select tag instead of this in future */}
          <Icon icon={globe} size="20px" />
          &nbsp;English&nbsp;           
          <Icon icon={chevronUp} />
        </div>
        {toggle ? (
          <div className="lang-toggle">
            <ul>
              <li>English</li>
            </ul>
            <ul>
              <li>Nepali</li>
            </ul>
          </div>
        ) : null}
        <div className="nepalnetflic">
            Netflix Nepal
        </div>
      </div>
    </div>
  );
}

export default Footer;
