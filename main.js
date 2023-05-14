//SHOW MENU
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//MENU HIDDEN
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //when we click on each nav__link, we remove the show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

//ADD BLUR TO HEADER
const blurHeader = () => {
  const header = document.getElementById("header");
  //when the scroll is greater than 50 viewport height, add blur
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);

// EMAIL JS
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  //ServiceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_bafsyqh",
      "template_ucm7bmn",
      "#contact-form",
      "RXPCXXRttJyPa65Ak"
    )
    .then(
      () => {
        //Show sent message
        contactMessage.textContent = "Message sent successfully ✅";

        //Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        //Clear input fields
        contactForm.reset();
      },
      () => {
        //Show error message
        contactMessage.textContent = "Message not sent (server error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

//SHOW SCROLL UP
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
