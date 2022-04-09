const express = require("express");
const router = express.Router();
const Data = require("../models/data.js");


router.post(("/"),async (req, res) => {
  try {
    const { name, email, address, docName, time } = await req.body;
    const newData = await Data.create({
      name,
      email,
      address,
      docName,
      time
    });
    console.log(newData)
    res.send({ newData: newData });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;


// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "abtechno898@gmail.com",
//         pass: "password"
//     }
// });

// const mailConfigurations = {
//     from: 'abtechno898@gmail.com',
//     to: 'anshubhagat66@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'Hi! There, You know I am using the NodeJS ' + 'Code along with NodeMailer to send this email.'
// };

// transporter.sendMail(mailConfigurations, function (error, info) {
//     if (error) throw Error(error);
//     console.log('Email Sent Successfully');
//     console.log(info);
// });