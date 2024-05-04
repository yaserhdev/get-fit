import React from 'react';
import AuthService from '../utils/auth';

const LogoutButton = () => {
  const handleLogout = () => {
    // Call the logout method from AuthService
    AuthService.logout();

    // Redirect the user back to the login screen
    window.location.href = '/login';
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton; // Make sure to export the component
