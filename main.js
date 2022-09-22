
//code to get navbar to stick
window.onscroll = function (){navFunction()};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
function navFunction(){
    if(window.scrollY >= sticky){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky")
    }
}

//code for sendgrid to send email for contact
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
// construct an email

// send the email via sendgrid
$(".emailButton").click(function () {
    const email = {
        to: 'christopher.aa.merritt@gmail.com',
        from: $("#emailFrom"),
        subject: $("#emailSubject"),
        text: $("#emailText"),
    };
    sendgrid.send(email)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })
})
