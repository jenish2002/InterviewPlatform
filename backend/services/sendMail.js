const nodemailer=require("nodemailer");
const {google}=require('googleapis');

const CLIENT_ID='473509240448-549pu44jf55bj2dos5q1ov5aac6e8bn9.apps.googleusercontent.com'
const CLIENT_SECRET='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'
const REDIRECT_URI='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN='1//047ra3tUUqJMlCgYIARAAGAQSNwF-L9IrpYfs8Rjqs2XqA_gUqoECb5QieJb8ugI95zGChP8OBnEKh3-QZToK12RhVZXc_679JOQ'


const oAuth2Client=new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})
 
async function sendMail(){
    try {
        const accessToken =await oAuth2Client.getAccessToken();
        const transport=nodemailer.createTransport({
            service:'gmail',
            auth:{
                type:'OAuth2',
                user:'vatsal5176@gmail.com',
                clientId:CLIENT_ID,
                clientSecret:CLIENT_SECRET,
                refreshToken:REFRESH_TOKEN,
                accessToken:accessToken
            }
        })
        const mailOptions={
            from:'jenishpatel<vatsal5176@gmail.com>',
            to:'vatsalpatel9393@gmail.com',
            subject:"InterviewPlatform",
            text:"Join Link",
            html:'<h1>Join Link </h1>'
        }
        const result =transport.sendMail(mailOptions)
        return result
    } catch (error) {
       
    }
}
sendMail().then(result=>{
    console.log("email sent"+JSON.stringify(result));
}).catch((e)=>{
    console.log(e);
})