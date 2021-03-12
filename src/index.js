import "./css/style.css";
import "./css/customStyles.css";

import { getDayOfWeek, renderData } from "./utils";
import {
  fetchWeatherDataByCityName,
  fetchWeatherDataByLocation,
} from "./weatherApi";

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
icon.classList.add("icon-size");
const weatherIcon = document.getElementById("weather-icon");
weatherIcon.appendChild(icon);

document.getElementById("today").innerText = new Date()
  .toString()
  .split(" ")
  .splice(1, 3)
  .join(" ");

document.getElementById("weed-day").innerText = getDayOfWeek();

const mapContainer = document.getElementsByTagName('aside')[0]
// default

window.onload = () => {
  (() => {
    const locationAllowed = async (position) => {
      fetchWeatherDataByLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((weather) => {
        renderData(weather, temp, icon, description, min, max, sunrise, sunset);
      });
    };

    const locationNotAllowed = async () => {
      fetchWeatherDataByLocation("40.1872", "44.5152").then((weather) => {
        renderData(weather, temp, icon, description, min, max, sunrise, sunset);
      });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        locationAllowed,
        locationNotAllowed
      );
    } else {
      alert("Error: Your browser doesn't support geolocation.");
    }
  })();
};

search.addEventListener("input", () => {
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

  fetchWeatherDataByCityName(city).then((weather) => {
    renderData(weather, temp, icon, description, min, max, sunrise, sunset);
  });
});
