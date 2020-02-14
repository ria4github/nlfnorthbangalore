const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
const msg = {
  to: "krishna@antstack.io",
  from: "praveen@antsatck.io",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>"
};
//ES6
sgMail.send(msg).then(resp => {
  console.log(resp);
}, console.error);
//ES8
