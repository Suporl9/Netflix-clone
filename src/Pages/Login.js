import React from 'react'
import logo from "../svg/logo.svg";
import styled from "styled-components";
import Loginform from '../Components/Loginform';
import Loginfootter from '../Components/Loginfootter';
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className="main-login-container">
            <div className="header-top">
                <Link to="/">
                <Logo src={logo} alt="netflix"/>
                </Link>
            </div>
            <Loginform/>
            <Loginfootter/>
            
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
