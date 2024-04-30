import { useState } from 'react';
import styled from 'styled-components';

// Styled component for the sign-up container
const SignUpContainer = styled.div`
  padding: 20px;
  margin: 20px auto;
  max-width: 400px;
  background-color: #fff; /* White background */
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    // Handle sign up logic
  };

  return (
    <SignUpContainer>
      <h2>Sign Up</h2>
      <form validated={validated} onSubmit={handleSignUpSubmit}>
        <input type="text" name="username" placeholder="Username" value={signUpData.username} onChange={handleSignUpChange} required />
        <input type="email" name="email" placeholder="Email" value={signUpData.email} onChange={handleSignUpChange} required />
        <input type="password" name="password" placeholder="Password" value={signUpData.password} onChange={handleSignUpChange} required />
        <button disabled={!(signUpData.username && signUpData.email && signUpData.password)} type="submit" variant="success">Sign Up</button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpPage;
