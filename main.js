
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

// get a instance of sendgrid and set the API key
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(SENDGRID_API_KEY);
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
})
