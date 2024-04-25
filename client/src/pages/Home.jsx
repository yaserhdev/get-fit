import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h1>Welcome to Your App</h1>
      {isLogin ? <LoginPage /> : <SignUpPage />}
      <p>{isLogin ? "Don't have an account?" : "Already have an account?"} <button onClick={toggleForm}>{isLogin ? "Sign Up" : "Login"}</button></p>
    </div>
  );
};

export default Home;