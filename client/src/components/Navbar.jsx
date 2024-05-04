import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthService from '../utils/auth'; // Import AuthService for logout functionality

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
  display: flex; /* Use flexbox */
  justify-content: space-between; /* Space elements evenly */
  align-items: center; /* Align items vertically */
`;

const StyledUl = styled.ul`
  list-style-type: none; /* Remove bullet points */
  margin: 0;
  padding: 0;
  flex: 1; /* Grow to take remaining space */
  display: flex; /* Use flexbox */
  justify-content: center; /* Center align items horizontally */
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

const StyledButton = styled.button`
  color: ${colors.offWhite}; /* Off-white text color */
  background-color: transparent; /* Transparent background */
  border: none; /* Remove border */
  font-size: 18px; /* Adjust font size */
  font-weight: bold; /* Bold font weight */
  text-transform: uppercase; /* Capitalize all text */
  cursor: pointer; /* Show pointer cursor on hover */
  margin-right: 25px; /* Add margin to the right */
`;

const Navbar = () => {
  const handleLogout = () => {
    // Call the logout method from AuthService
    AuthService.logout();
    // Redirect the user back to the login screen
    window.location.href = '/login';
  };

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
      <StyledButton onClick={handleLogout}>Logout</StyledButton> {/* Styled logout button */}
    </StyledNavbar>
  );
};

export default Navbar;
