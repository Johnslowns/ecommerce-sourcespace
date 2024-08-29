import React, { useState } from 'react';

const Login = () => {
  // States for sign-up form
  const [username, setUsername] = useState('');
  const [remail, setrEmail] = useState('');
  const [rpassword, setrPassword] = useState('');

  // States for sign-in form
  const [lemail, setlEmail] = useState('');
  const [lpassword, setlPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: username,
          email: remail,
          password: rpassword,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        // Reset the form or navigate to another page
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again later.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      alert('Login functionality not implemented yet.');
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again later.');
    }
  };

  return (
    <div className='bigger-container'>
      <div className="container" id="container">
        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <h1>Create Account</h1>
            <span>Register with E-mail</span>
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter E-mail"
              value={remail}
              onChange={(e) => setrEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={rpassword}
              onChange={(e) => setrPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <span>Login With Email & Password</span>
            <input
              type="email"
              placeholder="Enter E-mail"
              value={lemail}
              onChange={(e) => setlEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={lpassword}
              onChange={(e) => setlPassword(e.target.value)}
              required
            />
            <a href="#">Forgot Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* Toggle Panels */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome To <br />Sourcespace</h1>
              <p>Sign in With ID & Password</p>
              <button
                className="hidden"
                id="loginbtn"
                onClick={() => document.getElementById('container').classList.remove('active')}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello Client</h1>
              <p>Join Sourcespace for technical solutions</p>
              <button
                className="hidden"
                id="registerbtn"
                onClick={() => document.getElementById('container').classList.add('active')}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
