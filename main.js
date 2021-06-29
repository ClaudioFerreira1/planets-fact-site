import data from './data.js'

function generatePlanets(dbTest) {
  var tag = document.getElementById('header__main-nav--planet')

  dbTest.forEach((planet) => {
    tag.innerHTML += planet.name
  })
}

generatePlanets(data);
