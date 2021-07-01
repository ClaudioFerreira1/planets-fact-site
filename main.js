import data from './data.js'

const hamburguerIcon = document.getElementById("header__main-nav--div-img");
const navBarLinks = document.getElementById("header__main-nav--div");

hamburguerIcon.addEventListener("click", function () {
  hamburguerIcon.classList.toggle('change-anchor-color');
  navBarLinks.classList.toggle("show-div")
});


