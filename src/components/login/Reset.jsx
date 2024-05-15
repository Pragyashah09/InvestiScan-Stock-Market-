import React from 'react';
import PropTypes from 'prop-types';
import backgroundVideo from '../assests/video.mp4';

export default function Reset({ setPage }) {
  function changePassword() {
    setPage('login');
  }

  return (
    <div className="background">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="header">
          <h2 className="text">Change Password</h2>
          <form>
            <div className="inputs">
              <div>New Password</div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="New Password"
                className="input"
                required
              />
              <div>Confirm Password</div>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="input"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="newsletter"
                  aria-describedby="newsletter"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <div className="forget-password">
                  I accept the Terms and Conditions
                </div>
              </div>
            </div>
          </form>
          <a onClick={changePassword} className="submit" href="login">
            Reset password
          </a>
        </div>
      </div>
    </div>
  );
}

Reset.propTypes = {
  setPage: PropTypes.func.isRequired,
};
