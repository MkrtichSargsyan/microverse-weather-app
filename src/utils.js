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


export const renderData = (type,weather,temp,icon,description,min,max,sunrise,sunset)=>{
  temp.innerText =type==='°C' ? weather.temp+type : toggleTemperature(weather.temp) + type;
  icon.src = `http://openweathermap.org/img/w/${weather.icon}.png`;
  
  description.innerText = weather.description;
  min.innerText = type==='°C' ? weather.temp_min+type : toggleTemperature(weather.temp_min)  + type;
  max.innerText = type==='°C' ? weather.temp_max + type : toggleTemperature(weather.temp_max)  + type;

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

export const toggleTemperature = temp=>{

  temp= temp * 9 / 5 + 32;
  
  // temp = (temp - 32) * 5 / 9;

  return temp
}
