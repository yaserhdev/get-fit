import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import AllWorkouts from '../components/AllWorkouts';
import WorkoutForm from '../components/WorkoutForm';

const StyledDashboard = styled.div`
  /* Add any styling specific to the Dashboard page here */
  margin-top: 100px; /* Add top margin to start content below the Navbar */
`;

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Navbar />
      <WorkoutForm />
      <AllWorkouts />
    </StyledDashboard>
  );
};

export default Dashboard;
