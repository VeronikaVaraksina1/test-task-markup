const openMenu = document.querySelector(".button-open-mobile-menu");
const closeMenu = document.querySelector(".button-close-mobile-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const links = document.querySelectorAll(".nav-link");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-open");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-open");
});

links.forEach((link) =>
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
  })
);
