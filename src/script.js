function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesElementDate = losAngelesElement.querySelector("#date");
  let losAngelesElementTime = losAngelesElement.querySelector("#time");
  let losAngelesElementAmpm = losAngelesElement.querySelector("#ampm");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesElementDate.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesElementTime.innerHTML = losAngelesTime.format("h:mm:ss");
  losAngelesElementAmpm.innerHTML = losAngelesTime.format("A");
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
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#select-city");

citySelectElement.addEventListener("change", updateCity);
