import React from 'react'
import logo from "../svg/logo.svg";
import styled from "styled-components";

import Loginfootter from '../Components/Loginfootter';
import {Link} from 'react-router-dom'
import Signupform from '../Components/Signupform';

function Login() {
    return (
        <div className="main-login-container">
            <div className="header-top">
                <Link to="/">
                <Logo src={logo} alt="netflix"/>
                </Link>
            </div>
            <Signupform/>
            <Foo/>
            
        </div>
    )
}

const Logo = styled.img`
height: 36px;
width: 134px;
position: absolute;
margin-top: 2.5%;
left: 5%;
`

export default Login
