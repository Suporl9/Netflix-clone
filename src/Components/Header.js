import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../svg/logo.svg";
import "./Components.css";
import "../CSS/App.css";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_navigate_next } from "react-icons-kit/md/ic_navigate_next";

function Header() {
  const inputref = useRef(null);
  useEffect(() => {
    inputref.current.focus();
  }, []);

  return (
    <div className="header-container">
      <div className="header-top">
        <Logo src={logo} alt="netflix"></Logo>
        <Link to="/login" className="signinbtn">
          Sign In
        </Link>
      </div>
      <div className="header-content">
        <h1 className="h1tag">Unlimited movies, TV shows, and more.</h1>
        <p className="p1tag">Watch anywhere. Cancel anytime.</p>
        <div>
          <input
            placeholder="Email-Address"
            className="inputtag"
            type="text"
            ref={inputref}
          ></input>
          <Link to="/" className="getstartedsigninbtn">
            Get Stared{" "}
            <Icon className="iconn" icon={ic_navigate_next} size={34}></Icon>
          </Link>
        </div>
      </div>
    </div>
  );
}

const Logo = styled.img`
  height: 36px;
  width: 134px;
  position: absolute;
  margin-top: 2.5%;
  left: 5%;
`;

export default Header;
