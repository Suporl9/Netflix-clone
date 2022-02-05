import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";


// const regexp = RegExp(/[.*+?^${}()|[\]\\]/g);

function Signupform() {
  const inputref1 = useRef(null);
const {signup} = useAuth()
  const [userid, setuserid] = useState("");
  const [password, setpassword] = useState("");
  const [password, setpassword] = useState("");
  const [check, setCheck] = useState(false);

  const onchangeCheckbox = (event) => {
    setCheck(event.target.checked);
  };

  async function handleSubmit(e){
    e.preventDefault();
    if()
  }

  useEffect(() => {
    inputref1.current.focus();

  }, []);
  const handlechange = (e) => {
    setuserid(e.target.value);
  };
 
 

  return (
    <FooterContainer>
      <div className="form-container">
        <form >
          <h1>Sign Up</h1>
          <div className="input-container">
            <input
              value={userid}
              onChange={handlechange}
              className="input-empty"
              placeholder="Email or phone number*"
              type="Email*"
              ref={inputref1}
              required
            ></input>
          </div>
          <div className="input-container">
            <input
              className="input-empty"
              type="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password*"
              required
            ></input>
          </div>
          <div className="input-container">
            <input
              className="input-empty"
              type="password"
              value={passwordconfirm}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Confirm Password*"
              required
            ></input>
          </div>
          <div className="input-container">
            <button to="/" className="linkbtn" type="submit">
              Sign Up
            </button>
          </div>
          <div className="flexrememberandhelp">
            <div className="remembermeclass">
              <input
                type="checkbox"
                checked={check}
                onChange={onchangeCheckbox}
              ></input>
              <label className="labelclass">Remember Me</label>
            </div>
            <div>
              <Link to="/" className="needhelp">
                Need help?
              </Link>
            </div>
          </div>
          <div className="flexloginw">
           
            <div className="newton">
              <div className="new">
                <p>Already have an account?</p>
              </div>
              <Link to="/login" className="sigup" type="submit">
                Login in
              </Link>
            </div>
            <div className="pgproct">
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.<Link to="/login" style={{
                  fontSize:"0.8rem",
                  color:"#0052cc"
                }}>Learn more.</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 5;
  .form-container {
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    width: 28rem;
    height: 41rem;
    padding: 4rem;
    
  }
  .input-container {
    display: grid;
    grid-template-columns: repeat(1fr);
    margin-top: 1.2rem;
    
  }
  .input-empty {
    color: #fff;
    background: #333;
    border: none;
    outline:none;
    border-radius: 0.25rem;
    height: 3rem;
    border-style: none;
    padding: 0.9rem 2.5rem 0.9rem;

    font-size: 1rem;
  }
  .linkbtn {
    background: var(--main-red);
    color:#fff;
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;
    border-style: none;
    padding: 0.9rem 2.5rem 0.9rem;
    font-size: 1rem;
    outline:none;
    text-align: center;
  }
  .flexrememberandhelp {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0 1rem 0;
    font-size: 0.8rem;
    color: #808080;
  }
  .labelclass {
    margin-left: 5px;
  }
  .needhelp {
    color: #808080;
  }
  .needhelp:hover {
    border-bottom:1px solid #808080;
  }
  .flexloginw {
    display: flex;
    flex-direction: column;
  }
  .fbicon{
    background-color:#0052cc;
    padding-left:5px;
  }
  .fblogin{
    display:flex;
    flex-direction:row;
    align-items:baseline;
    

  }
  .newton{
    display:flex;
    flex-direction:row;
    margin-top:1rem;
    font-size:0.9rem;
    color: #808080;
  }
  .sigup{
    margin-left:0.5rem;
    
  }
  .sigup:hover{
    border-bottom:1px solid #fff;
   
  }
  .pgproct{
    margin-top:1.2rem;
    color: #808080;
    font-size:0.7rem;
  }

`;

export default Signupform;

// ctrl shift l
