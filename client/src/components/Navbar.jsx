import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; // Import styled-components library

// Define colors
const colors = {
  darkGreen: '#010400',
  offWhite: '#FFFBFC',
};

// Styled Navbar component with the same styling as Banner
const StyledNavbar = styled.nav`
  padding: 20px 0; /* Add padding for spacing */
  background-color: ${colors.darkGreen}; /* Dark green background */
  text-align: center; /* Center align the links */
  position: fixed; /* Position the navbar at the top of the viewport */
  width: 100%; /* Make the navbar span the full width of the page */
  top: 0; /* Position the navbar at the very top of the page */
`;

// Styled ul for the navbar links
const StyledUl = styled.ul`
  list-style-type: none; /* Remove bullet points */
  margin: 0;
  padding: 0;
`;

// Styled li for the navbar links
const StyledLi = styled.li`
  display: inline; /* Display links horizontally */
  margin-right: 20px; /* Add spacing between links */
`;

// Styled Link with custom styles
const StyledLink = styled(Link)`
  color: ${colors.offWhite}; /* Off-white text color */
  text-decoration: none; /* Remove underline */
  font-size: 18px; /* Adjust font size */
  font-weight: bold; /* Bold font weight */
  text-transform: uppercase; /* Capitalize all text */
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/dashboard">Dashboard</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/profile">Profile</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNavbar>
  );
};

export default Navbar;
