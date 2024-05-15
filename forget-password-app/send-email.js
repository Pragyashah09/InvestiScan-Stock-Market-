const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 5000;
require("dotenv").config();

app.use(cors());

app.use(express.json({limit: "25mb"}));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});




app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adarsh438tcsckandivali@gmail.com",
        pass: "rmdklolcsmswvyfw",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "thedebugarena@gmail.com",
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);
  } catch (error) {}
});




function sendEmail({ email, OTP }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'aaditya.21bcon517@jecrcu.edu.in', 
        pass: '21bcon517' 
      }
    });


    const mailOptions = {
      from: 'youremail@gmail.com', 
      to: email,
      subject: 'Password Reset',
      text: OTP 
    };


    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      } 
      return resolve({ message: "Email sent succesfuly" });
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post("/send_recovery_email", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${port}`);
});
