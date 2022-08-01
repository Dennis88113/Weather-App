
import {days,  forecastIcons, forecastDaysTemperature, forecastNightTemperature} from '/modules/variable.js';

const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Гомель&appid=a0d1fbe5e071085cd1a42b2916e53a47&cnt=40&units=metric`;

     async function getForecast() {
      const response = await fetch(forecastWeatherUrl);
      const data = await response.json();
      dataFiveDays(data);
      dataFiveNights(data) 
    }
  
    function dataFiveDays(data) {
    const dataDays = data.list.filter((reading) =>
      reading.dt_txt.includes("12:00:00"));
    
      let i = -1;
  
        for (const forecastDay of forecastDaysTemperature) {
             i++;
             forecastDay.innerHTML = Math.round(dataDays[i].main.temp) + " °";
        }
  
      let j = -1;
    
        for (const day of days) {
            j++;
            let threeDay = new Date(dataDays[j].dt_txt);
            let weekDay = threeDay.toLocaleString("ru", {weekday: "short"});
            day.innerHTML = weekDay;
            }
  
      let k = -1;

        for (const forecastIcon of forecastIcons) {
            k++
            const iForecast = dataDays[k].weather[0].icon;
            const forecastIconURL = "http://openweathermap.org/img/w/" + iForecast + ".png";
            forecastIcon.setAttribute ('src', forecastIconURL) 
        }
  }
  
      function dataFiveNights(data) {
      const dataNight = data.list.filter((reading) =>
      reading.dt_txt.includes("00:00:00"));
      
      let i = -1;
      
      for (const forecastNight of forecastNightTemperature) {
      i++;
      forecastNight.innerHTML = Math.round(dataNight[i].main.temp) + " °";
    }
  }

  export default getForecast;

