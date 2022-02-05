import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Loginfootter() {
  return (
    <Foottercmp>
      <div className="felx-grid">
        <Link to="/" className="Questions">
          Qustions?Contact us.
        </Link>
        <div className="gridd-items">
          <Link to="/" className="grid-item">
            FAQ
          </Link>
          <Link to="/" className="grid-item">
            Help center
          </Link>
          <Link to="/" className="grid-item">
            Account
          </Link>
          <Link to="/" className="grid-item">
            Media Center
          </Link>
          <Link to="/" className="grid-item">
            Investor Relations
          </Link>
          <Link to="/" className="grid-item">
            Jobs
          </Link>
        </div>
      </div>
    </Foottercmp>
  );
}
const Foottercmp = styled.div`
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  padding-top: 3rem;
  margin-top: 6rem;
  position: relative;
  z-index: 5;
  padding-bottom: 2rem;
  .Questions{
    margin-left:16rem;
    color:var(--main-grey);
  }
.felx-grid{
  display:flex;
  flex-direction:column;
}
  .gridd-items{
    display: grid;
  grid-template-columns: repeat(4,1fr);
  padding:2rem;
  width:70%;
  margin-top:0.7rem;
  margin-left: 13.4rem;
  }
`;
export default Loginfootter;
