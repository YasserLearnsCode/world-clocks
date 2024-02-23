function updateTime() {
  //Nairobi

  let nairobiElement = document.querySelector("#js-nairobi");
  if (nairobiElement) {
    let nairobiTimezone = moment().tz("Africa/Nairobi");
    let nairobiDateElement = document.querySelector("#js-nairobi-date");
    let nairobiTimeElement = document.querySelector("#js-nairobi-time");

    nairobiDateElement.innerHTML = nairobiTimezone.format("MMMM Do, YYYY");
    nairobiTimeElement.innerHTML = nairobiTimezone.format(
      "hh:mm:ss [<small>]A[<small>]"
    );
  }
  //Vancouver

  let vancouverElement = document.querySelector("#js-vancouver");
  if (vancouverElement) {
    let vancouverDateElement = document.querySelector("#js-vancouver-date");
    let vancouverTimeElement = document.querySelector("#js-vancouver-time");
    let vancouverTimezone = moment().tz("America/Vancouver");

    vancouverDateElement.innerHTML = vancouverTimezone.format("MMMM Do, YYYY");
    vancouverTimeElement.innerHTML = vancouverTimezone.format(
      "hh:mm:ss [<small>]A[<small>]"
    );
  }

  //Abidjan

  let abidjanElement = document.querySelector("#js-abidjan");
  if (abidjanElement) {
    let abidjanDateElement = document.querySelector("#js-abidjan-date");
    let abidjanTimeElement = document.querySelector("#js-abidjan-time");
    let abidjanTimezone = moment().tz("Africa/Abidjan");

    abidjanDateElement.innerHTML = abidjanTimezone.format("MMMM Do, YYYY");
    abidjanTimeElement.innerHTML = abidjanTimezone.format(
      "hh:mm:ss [<small>]A[<small>]"
    );
  }

  //New York
  let newYorkElement = document.querySelector("#js-new-york");
  if (newYorkElement) {
    let newYorkDateElement = document.querySelector("#js-new-york-date");
    let newYorkTimeElement = document.querySelector("#js-new-york-time");
    let newYorkTimezone = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTimezone.format("MMMM Do, YYYY");
    newYorkTimeElement.innerHTML = newYorkTimezone.format(
      "hh:mm:ss [<small>]A[<small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCities(event) {
  let cityTimeZones = event.target.value;

  if (cityTimeZones === "current") {
    cityTimeZones = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZones);
  let cityName = cityTimeZones.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#js-all-cities");
  citiesElement.innerHTML = `   
      <div class="city" id="js-nairobi">
        <div class="name">
          <span class="city-name">${cityName}</span> <br />
          <span class="date" id="js-nairobi-date">${cityTime.format(
            "MMMM Do, YYYY"
          )}</span>
        </div>
        <div class="city-time" id="js-nairobi-time">
          ${cityTime.format("hh:mm:ss [<small>]A[<small>]")}
        </div>
      </div>`;
}

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCities);
