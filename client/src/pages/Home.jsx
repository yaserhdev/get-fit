import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import LoginPage from '../components/LoginPage.jsx';
import SignUpPage from '../components/SignUpPage.jsx';

// Define colors
const colors = {
  darkGreen: '#010400',
  darkGray: '#30332E',
  offWhite: '#FFFBFC',
  lightCyan: '#62BBC1',
  lightBlue: '#25CFDC', // New color
};

// Keyframes for the modern text animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled components
const Banner = styled.div`
  padding: 40px;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 4px solid ${colors.lightBlue}; /* Use light blue for the bottom border */
  background-color: ${colors.offWhite}; /* Off-white for the background */
  color: ${colors.darkGreen}; /* Dark green for text color */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${colors.lightBlue}; /* Light blue for the button background */
  color: ${colors.offWhite};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Modify the "GET-FIT" banner to have an athletic look
const AthleticBanner = styled(Banner)`
  font-family: 'Arial', sans-serif; /* Change font family */
  background-color: ${colors.darkGreen}; /* Dark green background */
  color: ${colors.offWhite}; /* Off-white text color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add text shadow for depth */
  border-bottom: none; /* Remove bottom border */
`;

// New styled component for the animated background section
const AnimatedBackground = styled.div`
  position: relative;
  height: 400px; /* Increase height to reach the footer */
  background: linear-gradient(135deg, ${colors.lightBlue}, ${colors.lightCyan}); /* Gradient background */
  overflow: hidden;
`;

// New styled component for the content within the animated background section
const ContentWrapper = styled.div`
  position: absolute;
  top: 40%; /* Adjust vertical position */
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 1.5s ease-in;
  text-align: center;
  color: ${colors.offWhite};
`;

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // UseEffect hook to trigger animation only once when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
    }, 1500); // timeout value to match the animation duration
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      {/* Use the AthleticBanner component instead of Banner */}
      <AthleticBanner>GET-FIT</AthleticBanner>
      {isLogin ? <LoginPage /> : <SignUpPage />}
      <StyledParagraph>
        {isLogin ? "Don't have an account? Create one now!" : "Already have an account? Login here!"}{' '}
        {/* Use the StyledButton component with light blue background */}
        <StyledButton onClick={toggleForm}>{isLogin ? "Sign Up" : "Login"}</StyledButton>
      </StyledParagraph>
      {/* AnimatedBackground component with content */}
      <AnimatedBackground>
        <ContentWrapper>
          <h2>Welcome to GET-FIT!</h2>
          <p>Get ready to embark on your fitness journey with us.</p>
        </ContentWrapper>
      </AnimatedBackground>
    </div>
  );
};

export default Home;
