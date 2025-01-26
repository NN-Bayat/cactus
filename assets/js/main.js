/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Show Menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Hide Menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__links");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};

navLinks.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 150
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (sectionsClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============================*/
document.querySelectorAll(".contact__social a i").forEach((icon) => {
  icon.onclick = (e) => {
    e.preventDefault();
    alert("I'm not using any of those platforms! 😐");
    alert("Try another way 🤙");
  };
});

document.querySelectorAll(".shop__button").forEach((button) => {
  button.onclick = (e) => {
    e.preventDefault();
    alert("There is not any item! 😕");
  };
});
