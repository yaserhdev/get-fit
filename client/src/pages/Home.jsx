import { useState } from 'react';
import styled from 'styled-components';
import LoginPage from '../components/LoginPage.jsx';
import SignUpPage from '../components/SignUpPage.jsx';

const Banner = styled.div`
  padding: 40px; /* Increased padding for a more luxurious feel */
  font-size: 36px; /* Larger font size for emphasis */
  font-weight: 700; /* Bolder font weight for prominence */
  text-align: center;
  text-transform: uppercase; /* Uppercase text for sophistication */
  letter-spacing: 2px; /* Increased letter spacing for elegance */
  border-bottom: 4px solid #000000; /* Bottom border for distinction */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); /* Subtle box shadow for depth */
`;

const StyledParagraph = styled.p`
  font-size: 18px; /* Adjust font size for readability */
  text-align: center; /* Center align the text */
`;

const StyledButton = styled.button`
  padding: 10px 20px; /* Add padding to the button for better touch target */
  font-size: 16px; /* Adjust font size */
  background-color: #007bff; /* Use the luxurious blue color */
  color: #ffffff; /* White text for contrast */
  border: none; /* Remove border for cleaner look */
  border-radius: 5px; /* Add border radius for rounded corners */
  cursor: pointer; /* Change cursor to pointer on hover */
`;

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Banner>GET-FIT</Banner>
      {isLogin ? <LoginPage /> : <SignUpPage />}
      <StyledParagraph>
        {isLogin ? "Don't have an account? Create one now!" : "Already have an account? Login here!"}{' '}
        <StyledButton onClick={toggleForm}>{isLogin ? "Sign Up" : "Login"}</StyledButton>
      </StyledParagraph>
    </div>
  );
};

export default Home;
