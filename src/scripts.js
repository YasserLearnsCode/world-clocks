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
  //Calgary

  let calgaryElement = document.querySelector("#js-calgary");
  if (calgaryElement) {
    let calgaryDateElement = document.querySelector("#js-calgary-date");
    let calgaryTimeElement = document.querySelector("#js-calgary-time");
    let calgaryTimezone = moment().tz("Canada/Mountain");

    calgaryDateElement.innerHTML = calgaryTimezone.format("MMMM Do, YYYY");
    calgaryTimeElement.innerHTML = calgaryTimezone.format(
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
      <div class="city">
        <div class="name">
          <span class="city-name">${cityName}</span> <br />
          <span class="date">${cityTime.format("MMMM Do, YYYY")}</span>
        </div>
        <div class="city-time">
          ${cityTime.format("hh:mm:ss [<small>]A[<small>]")}
        </div>
      </div>
      <div class="button">
       <a href="index.html"> <button>Go Back</button> </a>
      </div>`;
}

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCities);
