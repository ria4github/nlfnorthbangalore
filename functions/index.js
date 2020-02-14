const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");
const { apiKey } = require("./sendGrid");
sgMail.setApiKey(apiKey);

const serviceAccount = require("./nlfyelahanka-service-account");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nlfyelahanka.firebaseio.com"
});

const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const sendEmail = doc => {
  console.log(doc.data());
  let subject;
  if (doc.data().userName) {
    subject = `You have new message from ${doc.data().userName}`;
  } else if (doc.data().giveName) {
    subject = `You have new Offerning request from ${doc.data().giveName}`;
  }
  const msg = {
    to: "praveen@antstack.io",
    from: "praveengorakala@gmail.com",
    subject: subject,
    html: `<strong>and easy to do anywhere, even with Node.js</strong>`
  };
  //ES6
  sgMail
    .send(msg)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
};
exports.connectData = functions.firestore
  .document("/connect_data/{id}")
  .onCreate(async (doc, context) => {
    console.log("connect_data ", doc);
    console.log("connect_data ", context);
    sendEmail(doc);
  });

exports.givaData = functions.firestore
  .document("/give_data/{id}")
  .onCreate(async (doc, context) => {
    console.log("givaData ", doc);
    console.log("givaData ", context);
    sendEmail(doc);
  });
