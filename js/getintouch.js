import confetti from 'https://cdn.skypack.dev/canvas-confetti';
emailjs.init("hmwioTbWkNdQUfGML");

function celebrate() {
    const confettiConfig = {
        particleCount: 500,
        spread: 70,
        origin: { y: 0.6 }
    };

    confetti(confettiConfig);
}

const btn = document.getElementById('getInTouch');
const headerText = document.querySelector('.contact-us__header h2');

document.getElementById("contact-us__form").addEventListener("submit", function (event) {


    event.preventDefault();
    
    btn.innerHTML = 'Sending...';
    
    const serviceID = 'default_service';
    const templateID = 'template_kxejcp8';
    
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            celebrate();
            btn.innerHTML = 'Message sent!';
            headerText.innerHTML = `Message sent, we will be in touch!`;
        }, (err) => {
            btn.innerHTML = 'Error, please try again';
            alert(JSON.stringify(err));
        });
    });
