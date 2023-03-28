const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const gmail = google.gmail('v1');
const Interviewer=require('../models/Interviwer')
const CLIENT_ID = '473509240448-erpijneig6pfjtreiut7ngede225ru5f.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
// const REDIRECT_URI = 'http://localhost:3006/auth/google/callback';
const REDIRECT_URI = 'https://interviewplatformbackend.onrender.com/auth/google/callback';
// const  = 'vatsal5176@gmail.com';
async function sendMail({from,to,displayName,Message,Subject}){
const   USER_EMAIL =from;
const   To_Email=to;
const interviewer=await Interviewer.findOne({email:USER_EMAIL})
console.log(interviewer);
   // Create an OAuth2 client with the given credentials
const oauth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  
  
  oauth2Client.setCredentials({
      refresh_token: interviewer.refreshToken
    });

  // Create the email message
  const message = [
    'Content-Type: text/html; charset=utf-8\r\n',
    `To: ${To_Email}\r\n`,
    `From:"${displayName}" ${USER_EMAIL}\r\n`,
    `Subject: ${Subject}\r\n\r\n`,
    `<p>${Message}</p>`
  ].join('');
  
  // Encode the message as base64
  const encodedMessage = Buffer.from(message).toString('base64');
  
  // Send the email using the Gmail API
  gmail.users.messages.send({
    auth: oauth2Client,
    userId: 'me',
    resource: {
      raw: encodedMessage
    }
  }, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      console.log(response);
    }
  }); 
}


module.exports= sendMail;