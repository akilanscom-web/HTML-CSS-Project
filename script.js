// BUTTON CLICK ALERT

const hireBtn = document.querySelector(".hero-text button");

hireBtn.addEventListener("click", () => {
    alert("Thanks for visiting Akilan Portfolio 🚀");
});


// SMOOTH SCROLL EFFECT

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        alert("Section Coming Soon 😎");

    });

});


// SCROLL ANIMATION

const cards = document.querySelectorAll(
    ".about-box, .skill-card, .project-card, .service-box"
);

window.addEventListener("scroll", () => {

    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});


// INITIAL STYLE FOR ANIMATION

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s ease";

});


// CONTACT FORM

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message Sent Successfully 🔥");

    form.reset();

});