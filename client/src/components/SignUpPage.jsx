import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [signUp] = useMutation(ADD_USER);

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    // Handle sign up logic
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    alert(signUpData.username);
    try {
      const { data } = await signUp({ variables: signUpData });
      Auth.login(data.signUp.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form validated={validated} onSubmit={handleSignUpSubmit}>
        <input type="text" name="username" placeholder="Username" value={signUpData.username} onChange={handleSignUpChange} required />
        <input type="email" name="email" placeholder="Email" value={signUpData.email} onChange={handleSignUpChange} required />
        <input type="password" name="password" placeholder="Password" value={signUpData.password} onChange={handleSignUpChange} required />
        <button disabled={!(signUpData.username && signUpData.email && signUpData.password)} type="submit" variant="success">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;