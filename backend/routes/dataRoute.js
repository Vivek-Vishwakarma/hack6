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
  setTimeout(function () {
    myVar = 20;
    scheduleReset();
  }, t);
}

router.post("/", async (req, res) => {
  try {
    const { name, email, address, docName, time, date, phone } = await req.body;
    const newData = await new Data({
      name,
      email,
      address,
      docName: docName.split("`")[0],
      time,
      date,
      phone,
      docMail: docName.split("`")[1],
    });
    const mailConfigurations = {
      from: process.env.MAIL_USER,
      to: email,
      subject: `Your Appointment is booked with Dr. ${docName.split("`")[0]}`,
      html: `<div style="border:1px solid #10bae0;">
      <b>
          <p style="margin: 0; padding: 0;">Dear ${name},</p>
  
          <div style=" display:flex; justify-content:left;">
              <p>your appointment is booked with Dr. ${docName.split("`")[0]}</p>
          </div>
      </b>
      <div style=" display:flex; justify-content:left;">
          <table style="width: 100%; border-collapse: collapse; background: #333; color: white; font-weight: bold;">
              <thead>
                  <tr>
                      <th
                          style="background: #333; color: white; font-weight: bold;padding: 6px;border: 1px solid #ccc;text-align: left;">
                          Doctor name</th>
                      <th
                          style="background: #333; color: white; font-weight: bold;padding: 6px;border: 1px solid #ccc;text-align: left;">
                          Date</th>
                      <th
                          style="background: #333; color: white; font-weight: bold;padding: 6px;border: 1px solid #ccc;text-align: left;">
                          Timing</th>
                      <th
                          style="background: #333; color: white; font-weight: bold;padding: 6px;border: 1px solid #ccc;text-align: left;">
                          Mail</th>
                  </tr>
              </thead>
              <tbody>
                  <tr style="background: #eee;">
                      <td style="padding: 6px; color: black; border: 1px solid #ccc; text-align: left;">${
                        docName.split("`")[0]
                      }</td>
                      <td style="padding: 6px;color: black; border: 1px solid #ccc; text-align: left;">${date}
                      </td>
                      <td style="padding: 6px;color: black; border: 1px solid #ccc; text-align: left;">${time}</td>
                      <td style="padding: 6px;color: black; border: 1px solid #ccc; text-align: left;">
                          <a href="">${docName.split("`")[1]}</a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="container d-flex justify-content-start mx-2">
          <h3>Thanks & Regards,</h3>
      </div>
      <div class="container d-flex justify-content-start mx-3">
          <h3>Health buddy</h3>
      </div>
      <div class="container my-5">
      </div>
  
      <!-- footer -->
      <div class="container my-0">
          <footer class="text-center text-lg-start">
              <!-- Copyright -->
              <div style="text-align:center; color:white; background-color: rgb(3, 119, 235);">
                  © 2022 Copyright:
                  <a style="color: white;" href="#">Health buddy</a>
              </div>
          </footer>
          <!--///// footer -->
      </div>
      <!-- End of .container -->
  </div>`,
    };
    const drmail = {
      from: process.env.MAIL_USER,
      to: docName.split("`")[1],
      subject: `Hello Dr. ${
        docName.split("`")[0]
      } Appointment is booked with ${name}`,
      html: `<div style="border:1px solid #10bae0;">
      <b>
          <p style="margin: 0; padding: 0;">Dear ${docName.split("`")[0]},</p>
  
          <div style=" display:flex; justify-content:left;">
              <p>your appointment is booked with patient ${name}. </p>
          </div>
      </b>
      <div style=" display:flex; justify-content:left;">
          <table style="width: 100%; border-collapse: collapse; background: #333; color: white; font-weight: bold;">
              <thead>
                  <tr>
                      <th
                          style="background: #333; color: white; font-weight: bold;padding: 6px;border: 1px solid #ccc;text-align: left;">
                          Patient Name</th>
                      <th
                          style="background: #333; color: white; font-weight: bold;padding: 6px;border: 1px solid #ccc;text-align: left;">
                          Date</th>
                      <th
                          style="background: #333; color: white; font-weight: bold;padding: 6px;border: 1px solid #ccc;text-align: left;">
                          Timing</th>
                      <th
                          style="background: #333; color: white; font-weight: bold;padding: 6px;border: 1px solid #ccc;text-align: left;">
                          Phone</th>
                  </tr>
              </thead>
              <tbody>
                  <tr style="background: #eee;">
                      <td style="padding: 6px; color: black; border: 1px solid #ccc; text-align: left;">${
                        docName.split("`")[0]
                      }</td>
                      <td style="padding: 6px;color: black; border: 1px solid #ccc; text-align: left;">${date}
                      </td>
                      <td style="padding: 6px;color: black; border: 1px solid #ccc; text-align: left;">${time}</td>
                      <td style="padding: 6px;color: black; border: 1px solid #ccc; text-align: left;">
                          <a href="">${phone}</a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="container d-flex justify-content-start mx-2">
          <h3>Thanks & Regards,</h3>
      </div>
      <div class="container d-flex justify-content-start mx-3">
          <h3>Health buddy</h3>
      </div>
      <div class="container my-5">
      </div>
  
      <!-- footer -->
      <div class="container my-0">
          <footer class="text-center text-lg-start">
              <!-- Copyright -->
              <div style="text-align:center; color:white; background-color: rgb(3, 119, 235);">
                  © 2022 Copyright:
                  <a style="color: white;" href="#">Health buddy</a>
              </div>
          </footer>
          <!--///// footer -->
      </div>
      <!-- End of .container -->
  </div>`,
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
