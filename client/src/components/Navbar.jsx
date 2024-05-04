import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoutButton from './LogoutButton'; // Import the LogoutButton component

const colors = {
  darkGreen: '#010400',
  offWhite: '#FFFBFC',
};

const StyledNavbar = styled.nav`
  padding: 20px 0; /* Add padding for spacing */
  background-color: ${colors.darkGreen}; /* Dark green background */
  text-align: center; /* Center align the links */
  position: fixed; /* Position the navbar at the top of the viewport */
  width: 100%; /* Make the navbar span the full width of the page */
  top: 0; /* Position the navbar at the very top of the page */
`;

const StyledUl = styled.ul`
  list-style-type: none; /* Remove bullet points */
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  display: inline; /* Display links horizontally */
  margin-right: 20px; /* Add spacing between links */
`;

const StyledLink = styled(Link)`
  color: ${colors.offWhite}; /* Off-white text color */
  text-decoration: none; /* Remove underline */
  font-size: 18px; /* Adjust font size */
  font-weight: bold; /* Bold font weight */
  text-transform: uppercase; /* Capitalize all text */
`;

const LogoutButtonContainer = styled.div`
  margin-left: auto; /* Align to the right */
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
      <LogoutButtonContainer>
        <LogoutButton /> {/* Include the LogoutButton component */}
      </LogoutButtonContainer>
    </StyledNavbar>
  );
};

export default Navbar;
