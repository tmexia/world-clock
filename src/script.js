function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesElementDate = losAngelesElement.querySelector("#date");
  let losAngelesElementTime = losAngelesElement.querySelector("#time");
  let losAngelesElementAmpm = losAngelesElement.querySelector("#ampm");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesElementDate.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesElementTime.innerHTML = losAngelesTime.format("h:mm:ss");
  losAngelesElementAmpm.innerHTML = losAngelesTime.format("A");

  let parisElement = document.querySelector("#paris");
  let parisElementDate = parisElement.querySelector("#date");
  let parisElementTime = parisElement.querySelector("#time");
  let parisElementAmpm = parisElement.querySelector("#ampm");
  let parisTime = moment().tz("Europe/Paris");

  parisElementDate.innerHTML = parisTime.format("MMMM Do YYYY");
  parisElementTime.innerHTML = parisTime.format("h:mm:ss");
  parisElementAmpm.innerHTML = parisTime.format("A");
}

updateTime();

setInterval(updateTime, 1000);
