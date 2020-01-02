const html = document.querySelectorAll("section");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

function mobileNav() {
  // nav.classList.toggle("nav-inactive");
  nav.classList.toggle("nav-active");
  navLinks.forEach((link, index) => {
    // console.log(index);
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 +
        0.5}s`;
    }
  });
  // Burger Animation
  burger.classList.toggle("toggle");
}

burger.addEventListener("click", mobileNav);
