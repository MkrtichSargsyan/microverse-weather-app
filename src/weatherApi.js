const base = "http://api.openweathermap.org/data/2.5/weather";

const fetchWeatherDataByCityName = async (cityName) => {
  const api = `${base}?q=${
    cityName.charAt(0).toUpperCase() + cityName.slice(1)
  }&appid=${process.env.WEATHER_KEY}&units=metric`;

  try {
    const responce = await fetch(api, { mode: "cors" });
    const data = await responce.json();

    return {
      lon: data.coord.lon,
      lat: data.coord.lat,
      temp: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    };
  } catch (error) {
    throw error;
  }
};

const fetchWeatherDataByLocation = async (lat, lon) => {
  const api = `${base}?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}&units=metric`;
  try {
    const responce = await fetch(api, { mode: "cors" });
    const data = await responce.json();

    return {
      lon: data.coord.lon,
      lat: data.coord.lat,
      temp: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      name: data.name,
    };
  } catch (error) {
    throw error;
  }
};

export { fetchWeatherDataByLocation, fetchWeatherDataByCityName };
