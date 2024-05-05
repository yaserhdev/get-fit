import { useState, useEffect } from 'react';
import MyWorkouts from '../components/MyWorkouts.jsx';
import Navbar from '../components/Navbar.jsx';
import styled from 'styled-components';
const ProfileContainer = styled.div`
  margin-top: 100px; /* Add top margin to start content below the Navbar */
`;
const Profile = () => {
  return (
    <ProfileContainer>
      <Navbar />
      <MyWorkouts />
    </ProfileContainer>
  );
};

export default Profile;
