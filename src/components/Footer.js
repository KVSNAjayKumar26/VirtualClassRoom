import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
background-color: ${(props) => props.theme.primaryColor};
color: white;
text-align: center;
padding: 1rem 0;
font-family: ${(props) => props.theme.fontFamily};
position: fixed;
bottom: 0;
width: 100%;
box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.2);
`;

const Links = styled.div`
margin: 0.5rem 0;

a {
color: ${(props) => props.theme.secondayColor};
margin: 0 0.5rem;
text-decoration: none;
font-weight: bold;
transition: color 0.3s;

&:hover {
color: white;
}
}
`;

const FooterText = styled.p`
font-size: 0.9rem;
margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
        <Links>
        <a href='/privacy'>Privacy Policy</a>
        <a href='/terms'>Terms of Service</a>
        <a href='/contact'>Contact Us</a>
        </Links>
        <FooterText>© 2024 Virtual Classroom. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;