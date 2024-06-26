import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #010400; /* Black background */
  color: #FFFBFC; /* Off-white text color */
  padding: 20px; /* Add padding for spacing */
  text-align: left; /* Align text to the left */
  position: fixed; /* Position the footer at the bottom of the viewport */
  width: 100%; /* Make the footer span the full width of the page */
  bottom: 0; /* Position the footer at the bottom of the viewport */
`;
const FooterText = styled.p`
  font-family: Arial, sans-serif; /* Use a sans-serif font */
  font-size: 14px; /* Adjust font size */
  margin: 0; /* Remove default margin */
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>© 2024 GET-FIT. All rights reserved.</FooterText>
    </StyledFooter>
  );
};

export default Footer;
