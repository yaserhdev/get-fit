import { useState } from 'react';
import LoginPage from '../components/LoginPage.jsx';
import SignUpPage from '../components/SignUpPage.jsx';

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h1>Welcome to get-fit</h1>
      {isLogin ? <LoginPage /> : <SignUpPage />}
      <p>{isLogin ? "Don't have an account? Create one now!" : "Already have an account? Login here!"} <button onClick={toggleForm}>{isLogin ? "Sign Up" : "Login"}</button></p>
    </div>
  );
};

export default Home;