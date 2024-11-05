document.addEventListener("DOMContentLoaded", (event) => {
  gsap.to(".sidebar__logo", { x: 30 });
  gsap.to(".nav-list", { x: 30 });
  gsap.to(".avatar", { x: 30 });
  gsap.to(".customers-title", { scale: 1 });
  gsap.to(".customers-page__container", { x: -30, y: -30 });
});
