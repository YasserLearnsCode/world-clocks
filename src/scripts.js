function updateTime() {
  //Nairobi

  let nairobiElement = document.querySelector("#js-nairobi");
  let nairobiDateElement = nairobiElement.querySelector(".date");
  let nairobiTimeElement = document.querySelector("#js-nairobi-time");
  let nairobiTimezone = moment().tz("Africa/Nairobi");

  nairobiDateElement.innerHTML = nairobiTimezone.format("MMMM Do, YYYY");
  nairobiTimeElement.innerHTML = nairobiTimezone.format(
    "hh:mm:ss [<small>]A[<small>]"
  );

  //Vancouver

  let vancouverElement = document.querySelector("#js-vancouver");
  let vancouverDateElement = vancouverElement.querySelector(".date");
  let vancouverTimeElement = document.querySelector("#js-vancouver-time");
  let vancouverTimezone = moment().tz("America/Vancouver");

  vancouverDateElement.innerHTML = vancouverTimezone.format("MMMM Do, YYYY");
  vancouverTimeElement.innerHTML = vancouverTimezone.format(
    "hh:mm:ss [<small>]A[<small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
