import React, { useState } from 'react';

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '' });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUpSubmit}>
        <input type="text" name="username" placeholder="Username" value={signUpData.username} onChange={handleSignUpChange} />
        <input type="email" name="email" placeholder="Email" value={signUpData.email} onChange={handleSignUpChange} />
        <input type="password" name="password" placeholder="Password" value={signUpData.password} onChange={handleSignUpChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;