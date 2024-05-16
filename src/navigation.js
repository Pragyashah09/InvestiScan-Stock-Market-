import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/home">Home</Link></li>
        <li style={liStyle}><Link to="/aboutus">AboutUs</Link></li>
        <li style={liStyle}><Link to="/">Login</Link></li>
        <li style={liStyle}><Link to="/forget">Pass</Link></li>
        <li style={liStyle}><Link to="/otp">OTP</Link></li>
        <li style={liStyle}><Link to="/reset">Reset</Link></li>
        <li style={liStyle}><Link to="/details/:id">Details</Link></li>
      </ul>
    </nav>
  );
};

// Define CSS styles
const navStyle = {
  backgroundColor: 'rgba(51, 51, 51, 0.7)', 
  padding: '20px',
  position: 'sticky',
  top: 0,
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const liStyle = {
  display: 'inline',
  marginRight: '30px', // Increased the space between items to 30px
};

const linkStyle = {
  color: '#fff', // Text color
};

export default Navigation;
