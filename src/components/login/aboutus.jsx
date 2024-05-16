import React from 'react';
import './AboutUs.css';

const AboutUs = () => (
  <div className="about-us-container">
    <h1>About Us</h1>
    <div className="member">
      <div className="member-info">
        <h2>Aaditya Jangid</h2>
        <p>
          Roll No. : 21BCON517
          <br />
          I am a student at JECRC University, pursuing a BTech in Computer Science and Engineering
          with a specialization in Microsoft Azure.
          I am genuinely enthusiastic about contributing to the success of this project and
          am committed to leveraging my skills and knowledge to achieve our goals.
        </p>
      </div>
    </div>
    <div className="member">
      <div className="member-info">
        <h2>Pragya Shah</h2>
        <p>
          Roll No. :21BCON411
          <br />
          I am a student at JECRC University, pursuing a BTech in Computer Science and Engineering
          with a specialization in Microsoft Azure also a Web Devloper.
          I makes various projects using frontent and Backend.
          I am genuinely enthusiastic about contributing to the success of this project and
          am committed to leveraging my skills and knowledge to achieve our goals.
        </p>
      </div>
    </div>
    <div className="member">
      <div className="member-info">
        <h2>Sambhav Maheshwari</h2>
        <p>
          Roll No. :21BCON521
          <br />
          Being a 3rd year cse student I am passionate about learning the trends of technology and
          how to contribute for the betterment of the society.
          I am particularly intrested in cloud computing and analytics.
          Designing is also one of my field of interests.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;

// CSS Styles
const styles = `
.about-us-container {
  text-align: center;
  color: #fff;
}

.img {
  width: 150px; 
}

.member {
  margin-top: 30px;
}

.member-info {
  background-color: rgba(0, 0, 0, 0.7); 
  border-radius: 10px;
  padding: 20px; 
}

.member-info h2 {
  color: white; 
}

.member-info p {
  color: white; /* Text color white */
  font-size: 18px; /* Adjust font size as needed */
  line-height: 1.6; /* Adjust line height for better readability */
}
`;

// Inject CSS into the DOM
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
