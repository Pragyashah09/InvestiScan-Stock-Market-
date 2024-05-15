import React, { useState } from "react";
import otp_icon from '../assests/otp.png'
import backgroundVideo from '../assests/video.mp4';
import './login.css';

export default function OTPInput({ email, otp, setPage }) {
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  


  function verfiyOTP() {
    if (parseInt(OTPinput.join("")) === otp) {
      setPage("reset");
      return;
    }
    alert(
      "The code you have entered is not correct, try again or re-send the link"
    );
    return;
  }


  return (
    <div className="Background">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="header">
            <div className="text">Email Verification</div>
          </div>
          <div className="forget-password1">
            <p>We have sent a code to your email {email}</p>
          </div>
          <div>
            <form>
              <div className="inputs">
                <div className="input">
                  <img src={otp_icon} className="img1" alt="nothing"/>
                  <input type="text" inputmode="numeric" placeholder="Enter OTP here" id="otp" />
                </div>               
                <div>
                  <button className="submit1" onClick={()=> verfiyOTP()}>
                    Verify Account
                  </button>
                </div>  
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>  
  );
}
