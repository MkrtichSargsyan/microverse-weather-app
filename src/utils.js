export const getDayOfWeek = () => {
  let d = new Date();
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return weekday[d.getDay()];
};


export const renderData = (weather,temp,icon,description,min,max,sunrise,sunset)=>{
  temp.innerText = weather.temp + "°C";
  icon.src = `http://openweathermap.org/img/w/${weather.icon}.png`;
  
  description.innerText = weather.description;
  min.innerText = weather.temp_min + "°C";
  max.innerText = weather.temp_max + "°C";

  sunrise.innerText = new Date(weather.sunrise * 1000).toLocaleTimeString(
    [],
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  sunset.innerText = new Date(weather.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}