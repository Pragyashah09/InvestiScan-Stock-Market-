import React, { useState } from 'react';
import './login.css';
import emailIcon from '../assests/email.png';
import userIcon from '../assests/person.png';
import passwordIcon from '../assests/password.png';
import backgroundVideo from '../assests/video.mp4';

const Login = () => {
  const [action, setAction] = useState('Login');

  const handleDoubleClick = () => {
    window.location.href = '/home';
  };

  return (
    <div className="background">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline" />
        </div>
        <div className="inputs">
          {action === 'Login' && (
            <div className="input">
              <img src={userIcon} alt="" />
              <input type="text" placeholder="User Id" id="username" />
            </div>
          )}
          <div className="input">
            <img src={emailIcon} alt="" />
            <input type="email" placeholder="Email" id="email" />
          </div>
          <div className="input">
            <img src={passwordIcon} alt="" />
            <input type="password" placeholder="Password" id="password" />
          </div>
        </div>
        {action !== 'Sign Up' && (
          <div className="forget-password">
            LOST PASSWORD?
            <a href="forget">Click Here</a>
          </div>
        )}
        <div className="submit-container">
          <button
            type={action === 'Login' ? 'button' : 'submit'}
            className={action === 'Login' ? 'submit gray' : 'submit'}
            onClick={() => { setAction('Sign Up'); }}
            onDoubleClick={() => { setAction('Login'); }}
          >
            Sign Up
          </button>
          <button
            type={action === 'Sign Up' ? 'button' : 'submit'}
            className={action === 'Sign Up' ? 'submit gray' : 'submit'}
            onClick={() => { setAction('Login'); }}
            onDoubleClick={handleDoubleClick}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
