var btnFind = document.getElementById("btnFind");
var inputFind = document.getElementById("inputFind");
var rowData = document.getElementById('rowData');
var arrOfData = [];
var leftPart = document.getElementById('leftPart');
let date = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var messageForUser = document.getElementById('messageForUser');
let section1 = document.getElementById('section1')

async function wether(location) {
  var respons = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4b88b309a8f542f6924174613221406&q=${location}&days=3`);
  var finalRes = await respons.json();
  arrOfData = finalRes;
  display();
}

btnFind.addEventListener('click', async function () {
  await wether(inputFind.value);
})
inputFind.addEventListener('keyup', async function () {
  await wether(inputFind.value);
})

function display() {
  if (arrOfData.location == undefined || inputFind.value == "") {
    messageForUser.classList.remove("d-none");
    section1.classList.add("editNum1");
    section1.classList.remove("editNum2");
    document.getElementById('leftPart').innerHTML = null;
  } else {
    messageForUser.classList.add("d-none");
    section1.classList.remove("editNum1");
    section1.classList.add("editNum2");
    let cartona = ``;
    cartona +=
      `
  <div class="col-lg-4  mb-3">
  <div class="caption ">
    <div class=" headCaption text-secondary p-1 fs-5 d-flex">
      <p class="d-inline "> ${days[date.getDay()]}</p>
      <p class=" ms-auto">${date.getDate()}${month[date.getMonth()]}</p>
    </div>
    <div>
      <div class="p-4 text-secondary">
        <h5 class=" ">${arrOfData.location.name}</h5>
        <div class=" d-flex justify-content-between mt-3 align-items-center text-white">
          <div>
            <h1 class="temperature">${arrOfData.current.temp_c}<sup>o</sup>C</h1>
          </div>
          <div>
            <img class="imgg " src='${arrOfData.current.condition.icon}' alt="iconWether">
          </div>
        </div>
        <h6 class="text-info mt-4">${arrOfData.current.condition.text}</h6>

        <div class='mt-5'>
          <img src="img/icon-umberella.png" alt="">
          <span class="d-inline textEndCard">20%</span>

          <img src="img/icon-wind.png" alt="">
          <span class="d-inline textEndCard">18km/h</span>

          <img src="img/icon-compass.png" alt="">
          <span class="d-inline textEndCard">East</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="col-lg-4 text-center ">
<div class="caption">
  <div class="headCaption text-center fs-5 text-secondary p-2 ">
    ${days[date.getDay() + 1]}
  </div>
  <div>
    <img class="py-5" src="img/113.png" alt="">
    <h2 class="text-white fw-bolder">${arrOfData.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h2>
    <h4 class="text-secondary fw-bolder">${arrOfData.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</h4>
    <h5 class="py-5 text-info">${arrOfData.forecast.forecastday[1].day.condition.text}</h5>
  </div>

</div>
</div>
<div class="col-lg-4 text-center endCaption">
<div class="caption">
  <div class="headCaption text-center fs-5 text-secondary p-2 ">
  ${days[date.getDay() + 2]}
  </div>
  <div>
    <img class="py-5" src="img/113.png" alt="">
    <h2 class="text-white fw-bolder">${arrOfData.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h2>
    <h4 class="text-secondary fw-bolder">${arrOfData.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</h4>
    <h5 class="py-5 text-info">${arrOfData.forecast.forecastday[2].day.condition.text}</h5>
  </div>
</div>
</div>
  
`
    document.getElementById('leftPart').innerHTML = cartona;

  }
}









