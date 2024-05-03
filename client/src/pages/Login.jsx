import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import LoginContainer from '../components/LoginContainer.jsx';
import SignUpContainer from '../components/SignUpContainer.jsx';

const colors = {
  darkGreen: '#010400',
  darkGray: '#30332E',
  offWhite: '#FFFBFC',
  lightCyan: '#62BBC1',
  lightBlue: '#25CFDC',
};
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
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
const AthleticBanner = styled(Banner)`
  font-family: 'Arial', sans-serif; /* Change font family */
  background-color: ${colors.darkGreen}; /* Dark green background */
  color: ${colors.offWhite}; /* Off-white text color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add text shadow for depth */
  border-bottom: none; /* Remove bottom border */
`;
const AnimatedBackground = styled.div`
  position: relative;
  height: 400px; /* Increase height to reach the footer */
  background: linear-gradient(135deg, ${colors.lightBlue}, ${colors.lightCyan}); /* Gradient background */
  overflow: hidden;
`;
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
  useEffect(() => {
    const timer = setTimeout(() => {
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AthleticBanner>GET-FIT</AthleticBanner>
      {isLogin ? <LoginContainer /> : <SignUpContainer />}
      <StyledParagraph>
        {isLogin ? "Don't have an account? Create one now!" : "Already have an account? Login here!"}{' '}
        <StyledButton onClick={toggleForm}>{isLogin ? "Sign Up" : "Login"}</StyledButton>
      </StyledParagraph>
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
