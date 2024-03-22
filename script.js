const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-ul");

hamburgerIcon.addEventListener("click", handleClick);

function handleClick() {
  hamburgerMenu.classList.toggle("hide");
}
