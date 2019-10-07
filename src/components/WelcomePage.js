import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WelcomeSection = styled.section`
  width: 100%;
  height: auto;
  margin-top: 20px;

    h1 {
      font-size: 55px;
      color: #00aaeb;
      text-align: center;
    }
`;
const Nav = styled.nav`
  width: 100%;
  
  min-height: 70px;
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;

  a {
    font-size: 18px;
    color: #636363;
    width: 250px;
    border: 1px solid #c4c4c4;
    padding: 14px 16px;
    height: 50px;
    text-decoration: none;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #00aaeb;
      color: #fff;
    }
  }
`;
export default function WelcomePage() {
  return (
    <WelcomeSection className="welcome-page">
      <h1>Welcome to the fan page of Rick &amp; Morty</h1>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/location">Location</Link>
      </Nav>
    </WelcomeSection>
  );
}
