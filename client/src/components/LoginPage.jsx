import { useState } from 'react';

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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} />
        <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;