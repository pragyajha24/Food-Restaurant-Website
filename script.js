const openNav = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const closeBtn = document.getElementById("mobile-exit");

openNav.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
