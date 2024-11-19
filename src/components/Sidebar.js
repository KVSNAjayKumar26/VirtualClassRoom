import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-bootstrap';
import Profilepic from '../assets/Profilepic.jpg';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 576px) {
    position: relative;
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Profile = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 0.5rem;
    border: 2px solid ${(props) => props.theme.secondaryColor};
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: ${(props) => props.theme.secondaryColor};
  }
`;

const NavList = styled.nav`
  width: 100%;

  a {
    display: block;
    color: white;
    padding: 0.8rem 1rem;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s ease;

    &.active {
      background-color: ${(props) => props.theme.secondaryColor};
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  @media (max-width: 576px) {
    a {
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Profile>
        <img src= {Profilepic} alt="User Profile" />
        <h3>John Doe</h3>
        <p>Instructor</p>
      </Profile>
      <NavList>
        <NavLink to="/dashboard" activeClassName="active">
          Dashboard
        </NavLink>
        <NavLink to="/classes" activeClassName="active">
          Classes
        </NavLink>
        <NavLink to="/students" activeClassName="active">
          Students
        </NavLink>
        <NavLink to="/settings" activeClassName="active">
          Settings
        </NavLink>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;
