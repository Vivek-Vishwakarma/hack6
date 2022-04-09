const express = require("express");
const cors = require("cors");
const router = express.Router();
const Data = require("../models/data.js");
const nodemailer = require('nodemailer');
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());



const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});


router.route("/").post(async (req, res) => {
  try {
    console.log("route");
    // console.log(req.body);
    console.log(req.body);
    const { name, email, address, docName } = req.body;
    const newData = await Data.create({
      name,
      email,
      address,
      docName,
    });
    const mailConfigurations = {
      from: process.env.MAIL_USER,
      to: email,
      subject: 'Your doctor Appointment is booked',
      text: 'Hi! There, You know I am using the NodeJS ' + 'Code along with NodeMailer to send this email.'
    };

    transporter.sendMail(mailConfigurations, function (error, info) {
      if (error) throw Error(error);
      console.log('Email Sent Successfully');
      console.log(info);
    });


    console.log(newData)
    res.send({ newData: newData });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
