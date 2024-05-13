const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-ul");
const navigationHamburger = document.querySelector(".toggle-button");
const offscreenMenu = document.querySelector(".offscreen-menu");

hamburgerIcon.addEventListener("click", handleClick);

function handleClick() {
  hamburgerMenu.classList.toggle("hide");
}

const bellIcon = document.querySelector(".bell-container");
const notificationMenu = document.querySelector("aside");

bellIcon.addEventListener("click", handleBellClick);

function handleBellClick() {
  notificationMenu.classList.toggle("hide");
}

navigationHamburger.addEventListener("click", handleEvent);

function handleEvent() {
  console.log("It has been clicked");
  offscreenMenu.classList.toggle("active");
}
