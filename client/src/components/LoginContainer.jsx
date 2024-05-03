import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
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
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  const [login] = useMutation(LOGIN_USER);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    // Handle login logic
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({ variables: { ...loginData } });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      // setShowAlert(true);
    }

    setLoginData({
      email: '',
      password: '',
    });
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
