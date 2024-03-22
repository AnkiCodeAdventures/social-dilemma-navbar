const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-ul");

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
