import { useState } from 'react';
import styled from 'styled-components';

// Styled component for the login container
const LoginContainer = styled.div`
  padding: 20px;
  margin: 20px auto;
  max-width: 400px;
  background-color: #fff; /* White background */
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} />
        <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} />
        <button type="submit">Login</button>
      </form>
    </LoginContainer>
  );
};

export default LoginPage;
