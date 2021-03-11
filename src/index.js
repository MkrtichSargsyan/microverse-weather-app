import "./css/style.css";
import "./css/customStyles.css";

import fetchWeatherData from "./weather";

const label = document.querySelector(".form-input-label");
const search = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const countryName = document.getElementsByTagName("h1")[0];
const temp = document.getElementById("temp");
const description = document.getElementById("description");

const min = document.getElementById("min");
const max = document.getElementById("max");

const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

const icon = document.createElement("img");
const weatherIcon = document.getElementById("weather-icon");
weatherIcon.appendChild(icon);

document.getElementById("today").innerText = new Date()
  .toString()
  .split(" ")
  .splice(1, 3)
  .join(" ");

search.addEventListener("input", (event) => {
  label.classList.add("label-over-input");
  if (search.value.length > 0) {
    label.classList.add("label-over-input");
    label.classList.remove("label-inside-input");
  } else {
    label.classList.add("label-inside-input");
    label.classList.remove("label-over-input");
  }
});

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const city = search.value;
  countryName.innerText = city;
  document.getElementsByTagName("form")[0].reset();
  label.classList.add("label-inside-input");
  label.classList.remove("label-over-input");

  fetchWeatherData(city).then((weather) => {
    temp.innerText = weather.temp + "°C";
    icon.src = `http://openweathermap.org/img/w/${weather.icon}.png`;
    icon.classList.add("icon-size");
    description.innerText = weather.description;
    min.innerText = weather.temp_min + "°C";
    max.innerText = weather.temp_max + "°C";

    sunrise.innerText = new Date(weather.sunrise * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    sunset.innerText = new Date(weather.sunset * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    console.log(weather);
  });
});
