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

let myVar = 20;

function scheduleReset() {
    let reset = new Date();
    reset.setHours(24, 0, 0, 0);
    let t = reset.getTime() - Date.now();
    setTimeout(function() {
        myVar=20;
        scheduleReset();
    }, t);
}


router.post("/", async (req, res) => {
  try {

  const { name, email, address, docName, time, date } = await req.body;
  const newData = await new Data({
    name,
    email,
    address,
    docName : docName.split("`")[0],
    time,
    date,
    docMail : docName.split("`")[1]
  });
  const mailConfigurations = {
    from: process.env.MAIL_USER,
    to: email,
    subject: `Your Appointment is booked with Dr. ${docName.split("`")[0]}`,
    html: `<h4>Your appointment with ${docName.split("`")[0]} is booked at ${time} on ${date}</h4> <br> <p>Thank You !!</p>`,
  };
  const drmail = {
    from: process.env.MAIL_USER,
    to: docName.split("`")[1],
    subject: `Hello Dr. ${docName.split("`")[0]} Appointment is booked with ${name}`,
    html: `<h4>${docName.split("`")[0]} Your appointment with ${name} is booked at ${time} on ${date}</h4> <br> <p>Thank You !!</p>`,
  };
  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) throw Error(error);
    console.log("Email Sent Successfully");
    console.log(info);
  });
  transporter.sendMail(drmail, function (error, info) {
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
    console.log(error);
    res.send(error);
  }
});
module.exports = router;
