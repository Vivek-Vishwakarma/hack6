const express = require("express");
const router = express.Router();
const Data = require("../models/data.js");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, address, docName, time, date } = await req.body;
    const newData = await new Data({
      name,
      email,
      address,
      docName,
      time,
      date
    });
    const mailConfigurations = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Your doctor Appointment is booked",
      html: `<h4>Your appointment with ${docName} is booked at ${time} on ${date}</h4> <br> <p>Thank You !!</p>`,
    };

    transporter.sendMail(mailConfigurations, function (error, info) {
      if (error) throw Error(error);
      console.log("Email Sent Successfully");
      console.log(info);
    });
    newData.save();
    console.log(newData);
    res.send({ newData: newData });
  } catch (error) {
    res.send(error);
  }
});
router.get("/admin", async (req, res) => {
  try {
    const allData = await Data.find({});
    res.send(allData);
  } catch (error) {
    console.log(error)
    res.send(error)
  }
});
module.exports = router;
