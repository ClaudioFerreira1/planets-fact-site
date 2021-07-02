import data from './data.js'

const hamburguerIcon = document.getElementById("header__main-nav--div-anchor");
const navBarLinks = document.getElementById("header__main-nav--div");
// const surfaceButton = document.getElementById("surface");
// const secondImage = document.getElementById("upper-section__img-div--second-image");

hamburguerIcon.addEventListener("click", function () {
  hamburguerIcon.classList.toggle('change-anchor-color');
  navBarLinks.classList.toggle("show-div");
  document.body.classList.toggle("disable-background");
});

// surfaceButton.addEventListener("click", function () {
//   secondImage.style.visibility = "visible";
// });

document.querySelectorAll(".header__main-nav--planet").forEach((item) => {
  var name = item.innerHTML;
  item.addEventListener('click', () => renderBody(`${name}`));
});

function renderBody(planet) {
  data.forEach((objetoPlaneta) => {
    if (planet === objetoPlaneta.name) {
      document.getElementById("main-title").innerHTML = `${objetoPlaneta.name}`;
      document.getElementById("main-description").innerHTML = `${objetoPlaneta.overview.content}`
    }
  })
};