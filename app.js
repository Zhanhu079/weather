
window.addEventListener("load", () => {
  let long;
  let lat;
  let location = document.querySelector(".location-time-zone");
  let temp = document.querySelector(".temperature-degree");
  let description = document.querySelector(".temperature-description");
  let iconSrc = document.querySelector(".icon");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fc6ac5cf1d758414a14f89dec586b456&units=metric`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          location.textContent = data.name;
          temp.textContent = data.main.temp;
          description.textContent = data.weather[0].description;

          let icon = data.weather[0].icon;
          let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          iconSrc.src = iconURL;
        });
    });
  }
});
