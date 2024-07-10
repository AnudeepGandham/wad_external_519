import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const registeredEmail = 'rohitm@gmail.com';
    const registeredPassword = 'password542';

    if (email === registeredEmail && password === registeredPassword) {
      alert('Login successful!');
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email: <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
        <label>Password: <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
        <button type="submit">Login</button>
        {loginError && <p className="error">Login failed. Please check your email and password.</p>}
        <p className="navigateToRegister">Don't have an account? <Link to="/registration">Register</Link> </p>
      </form>
    </div>
  );
};

export default Login;
