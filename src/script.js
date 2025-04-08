function updateTime() {
  let PhnomPenhElement = document.querySelector("#phnomPenh");
  let PhnomPenhElementDate = PhnomPenhElement.querySelector("#date");
  let PhnomPenhElementTime = PhnomPenhElement.querySelector("#time");
  let PhnomPenhElementAmpm = PhnomPenhElement.querySelector("#ampm");
  let PhnomPenhTime = moment().tz("Asia/Phnom_Penh");

  PhnomPenhElementDate.innerHTML = PhnomPenhTime.format("MMMM Do YYYY");
  PhnomPenhElementTime.innerHTML = PhnomPenhTime.format("h:mm:ss");
  PhnomPenhElementAmpm.innerHTML = PhnomPenhTime.format("A");

  let lisbonElement = document.querySelector("#lisbon");
  let lisbonElementDate = lisbonElement.querySelector("#date");
  let lisbonElementTime = lisbonElement.querySelector("#time");
  let lisbonElementAmpm = lisbonElement.querySelector("#ampm");
  let lisbonTime = moment().tz("Europe/Lisbon");

  lisbonElementDate.innerHTML = lisbonTime.format("MMMM Do YYYY");
  lisbonElementTime.innerHTML = lisbonTime.format("h:mm:ss");
  lisbonElementAmpm.innerHTML = lisbonTime.format("A");

  let madridElement = document.querySelector("#madrid");
  let madridElementDate = madridElement.querySelector("#date");
  let madridElementTime = madridElement.querySelector("#time");
  let madridElementAmpm = madridElement.querySelector("#ampm");
  let madridTime = moment().tz("Europe/madrid");

  madridElementDate.innerHTML = madridTime.format("MMMM Do YYYY");
  madridElementTime.innerHTML = madridTime.format("h:mm:ss");
  madridElementAmpm.innerHTML = madridTime.format("A");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="location">
          <div class="city-container">
            ${cityName}
            <div class="date"">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time-container">
            <div class="time">${cityTime.format("h:mm:ss")}</div>
            <div class="ampm">${cityTime.format("A")}</div>
          </div>
        </div>
        <a href="/" class="link-index">All cities</a>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#select-city");

citySelectElement.addEventListener("change", updateCity);
