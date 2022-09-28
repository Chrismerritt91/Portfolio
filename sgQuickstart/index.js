
//code for sendgrid to send email for contact
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
// construct an email

// send the email via sendgrid

    const email = {
        to: 'christopher.aa.merritt@gmail.com',
        from: 'christopher.aa.merritt@gmail.com',
        subject: 'hello world',
        text: 'hello world'
    };
    sendgrid.send(email)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })

