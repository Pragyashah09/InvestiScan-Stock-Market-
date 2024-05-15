import React, { useRef } from 'react';
import './login.css';
import emailIcon from '../assests/email.png';
import backgroundVideo from '../assests/video.mp4';

const ForgetPassword = () => {
  const emailRef = useRef();

  const handleClick = () => {
    window.location.href = '/reset';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Reset password email sent to:', email);
      } else {
        console.error('Failed to send reset password email');
      }
    } catch (error) {
      console.error('Error sending reset password email:', error);
    }
  };

  return (
    <div className="background">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="container">
        <div className="header">
          <div className="text">Forget Password</div>
          <div className="underline">a</div>
        </div>
        <form className="inputs" onSubmit={handleSubmit}>
          <div className="input">
            <img src={emailIcon} alt="Email Icon" />
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              ref={emailRef}
              required
            />
          </div>
          <button type="submit" className="submit design" onClick={handleClick}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
