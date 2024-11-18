import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import moment from "moment";
import {
  // smtp_host,
  smtp_type,
  smtp_usename,
  smtp_password,
  from_Name,
  from_email,
  recievers,
} from "@/constant/apiConstant";

import { phoneNumber, contactEmail } from "@/constant/headerConstant";

export default async function sendMailHandler(req, res) {
  let emailData = req.body;

  const transporter = nodemailer.createTransport({
    // host: smtp_host,
    // port: 587,
    service: smtp_type,
    auth: {
      user: smtp_usename,
      pass: smtp_password,
    },
  });

  const mailOptions = {
    from: {
      name: from_Name,
      address: from_email,
    },
  };

  if (emailData.type == "flight-confirmation") {
    mailOptions.to = [...recievers, emailData.travellerInformation.email];
    mailOptions.subject = "Flight Booking Confirmation";

    emailData.bookingDate = moment(emailData.bookingDate).format(
      "dddd, MMMM Do YYYY"
    );

    try {
      const html = await getEjsTemplate(
        path.resolve(process.cwd(), "templates", "flight_confirmation.ejs"),
        { flightDetails: emailData, phoneNumber, contactEmail }
      );

      mailOptions.html = html;

      await transporter.sendMail(mailOptions);
      res.status(200).send({
        message: "Successfully submitted the form and sent the email.",
      });
      console.log("Email sent successfully.");
    } catch (error) {
      console.error("Error in sending email: ", error);
      res.status(500).send({
        message: "Error sending email.",
      });
    }
  } else if (emailData.type == "contact") {
    mailOptions.to = recievers;
    mailOptions.subject = "Contact Us";

    try {
      const html = await getEjsTemplate(
        path.resolve(process.cwd(), "templates", "contact-us.ejs"),
        { flightDetails: emailData, phoneNumber, contactEmail }
      );

      mailOptions.html = html;

      await transporter.sendMail(mailOptions);
      res.status(200).send({
        message: "Successfully submitted the form and sent the email.",
      });
      console.log("Email sent successfully.");
    } catch (error) {
      console.error("Error in sending email: ", error);
      res.status(500).send({
        message: "Error sending email.",
      });
    }
  }
}

async function getEjsTemplate(filePath, data) {
  return new Promise((resolve, reject) => {
    ejs.renderFile(filePath, data, (err, html) => {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  });
}
