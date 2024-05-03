import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const StyledDashboard = styled.div`
  /* Add any styling specific to the Dashboard page here */
`;

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Navbar />
      <div>Dashboard</div>
    </StyledDashboard>
  );
};

export default Dashboard;
