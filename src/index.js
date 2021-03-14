import "./css/style.css";
import "./css/customStyles.css";

import { getDayOfWeek, renderData } from "./utils";
import { fetchWeatherDataByCityName } from "./weatherApi";
import { fetchGiphy } from "./giphyApi";

const gifContainer = document.getElementById('gif-container')

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

window.onload = () => {
  fetchWeatherDataByCityName("Yerevan").then((weather) => {
    renderData(weather, temp, icon, description, min, max, sunrise, sunset);
    fetchGiphy(weather.description).then(url=>{
      gifContainer.setAttribute('src',`https://media.giphy.com/media/${url}/giphy.gif`)
    });
  });
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
    fetchGiphy(weather.description).then(url=>{
      gifContainer.setAttribute('src',`https://media.giphy.com/media/${url}/giphy.gif`)
    });
  });
});
