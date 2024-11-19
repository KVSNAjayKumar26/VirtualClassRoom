import React from 'react'
import styled from 'styled-components'
import { fadeIn } from '../styles/animations'

const AnimatedDiv = styled.div`
animation: ${fadeIn} 2s ease-in-out;
background-color: ${(props) => props.theme.primaryColor};
color: white;
padding: 1rem;
border-radius: 8px;
`;
const Header = () => {
  return (
    <AnimatedDiv>
        <h1>Welcome to the Virtual Classroom</h1>
    </AnimatedDiv>
  );
};

export default Header;