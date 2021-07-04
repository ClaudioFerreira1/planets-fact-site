import data from './data.js'

const hamburguerIcon = document.getElementById("header__main-nav--div-anchor");
const navBarLinks = document.getElementById("header__main-nav--div");
const overviewButton = document.getElementById("overview");
const internalStructureButton = document.getElementById("structure");
const surfaceButton = document.getElementById("surface");

document.querySelectorAll(".header__main-nav--planet").forEach((item) => {
  var planetName = item.innerHTML;
  var divButtons = document.getElementById("upper-section__right-bottom");

  item.addEventListener('click', () => {
    renderBody(`${planetName}`);
    divButtons.setAttribute("class", `${planetName.toLocaleLowerCase()}`);
    document.getElementById("upper-section__right-bottom").classList.remove("hide-content");
    document.getElementById("upper-section__left--img-div").classList.remove("hide-content");
    document.getElementById("upper-section__right").classList.remove("hide-content");
    document.getElementById("bottom-section__main-div").classList.remove("hide-content");
    navBarLinks.classList.remove("show-div");
    document.body.classList.remove("disable-background");
  });
});

function renderBody(planet) {
  data.forEach((objetoPlaneta) => {
    if (planet.toLowerCase() === objetoPlaneta.name.toLowerCase()) {
      document.getElementById("main-title").innerHTML = `${objetoPlaneta.name}`;
      document.getElementById("main-description").innerHTML = `${objetoPlaneta.overview.content}`;
      document.querySelector("link[rel~='icon']").href = `./assets/planet-${planet.toLowerCase()}.svg`
      document.getElementById("source-href").href = `${objetoPlaneta.overview.source}`;
      if (document.getElementById("structure").classList.contains("button-selected")) {
        document.getElementById("upper-section__img-div--first-image").src = `${objetoPlaneta.images.internal}`;
      } else {
        document.getElementById("upper-section__img-div--first-image").src = `${objetoPlaneta.images.planet}`;
      }
      document.getElementById("upper-section__img-div--second-image").src = `${objetoPlaneta.images.geology}`;
      document.getElementById("rotation-time").innerHTML = `${objetoPlaneta.rotation}`;
      document.getElementById("revolution-time").innerHTML = `${objetoPlaneta.revolution}`;
      document.getElementById("radius").innerHTML = `${objetoPlaneta.radius}`;
      document.getElementById("average-temp").innerHTML = `${objetoPlaneta.temperature}`;

      overviewButton.addEventListener("click", function () {
        document.getElementById("upper-section__img-div--first-image").src = `${objetoPlaneta.images.planet}`;
        document.getElementById("source-href").href = `${objetoPlaneta.overview.source}`;
        document.getElementById("main-description").innerHTML = `${objetoPlaneta.overview.content}`;
        document.getElementById("upper-section__img-div--second-image").style.visibility = "hidden";
      });

      internalStructureButton.addEventListener("click", function () {
        document.getElementById("upper-section__img-div--first-image").src = `${objetoPlaneta.images.internal}`;
        document.getElementById("source-href").href = `${objetoPlaneta.structure.source}`;
        document.getElementById("main-description").innerHTML = `${objetoPlaneta.structure.content}`;
        document.getElementById("upper-section__img-div--second-image").style.visibility = "hidden";
      });

      surfaceButton.addEventListener("click", function () {
        document.getElementById("upper-section__img-div--first-image").src = `${objetoPlaneta.images.planet}`;
        document.getElementById("source-href").href = `${objetoPlaneta.geology.source}`;
        document.getElementById("main-description").innerHTML = `${objetoPlaneta.geology.content}`;
        document.getElementById("upper-section__img-div--second-image").style.visibility = "visible";
      });
    }
  })
};

const btnContainer = document.getElementById("upper-section__right-bottom");
const btns = btnContainer.getElementsByClassName("upper-section__button");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("button-selected");
    current[0].className = current[0].className.replace(" button-selected", "");
    this.className += " button-selected";
  });
}

renderBody("Earth");


hamburguerIcon.addEventListener("click", function () {
  hamburguerIcon.classList.toggle('change-anchor-color');
  navBarLinks.classList.toggle("show-div");
  document.body.classList.toggle("disable-background");
  document.getElementById("upper-section__right-bottom").classList.toggle("hide-content");
  document.getElementById("upper-section__left--img-div").classList.toggle("hide-content");
  document.getElementById("upper-section__right").classList.toggle("hide-content");
  document.getElementById("bottom-section__main-div").classList.toggle("hide-content");
});