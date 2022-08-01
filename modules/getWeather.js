import {currentTemperature, weatherTitle, icon, windDirectionIcon, windSpeed, feelingTemp, visibility, humidity, pressure, town, sunrise, sunset } from '/modules/variable.js';


const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Homel&lang=ru&appid=a0d1fbe5e071085cd1a42b2916e53a47&units=metric`;


 async function getWeather() {
       const resp = await fetch(currentWeatherUrl);
       const data = await resp.json();
       let iconCode = data.weather[0].icon;
       const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
       icon.setAttribute ('src', iconUrl)
     

       currentTemperature.innerHTML = Math.round(data.main.temp) + " °C";
       weatherTitle.innerHTML = data.weather[0].description;
       
   
       let arrow = document.createElement('img') 
       arrow.src = '../images/direction.svg'
       windDirectionIcon.appendChild(arrow)
       windDirectionIcon.style.cssText=`
       transform: rotate(${data.wind.deg}deg);
       margin-right: 10px;`;
       windSpeed.innerHTML = Math.round(data.wind.speed * 3.6) + " " + " км/ч";
   

       feelingTemp.innerHTML = Math.round(data.main.feels_like) + " °C";
       visibility.innerHTML = data.visibility / 1000 + " км";
       humidity.innerHTML = data.main.humidity + " %";
       pressure.innerHTML = data.main.pressure + " мбар";
       town.innerHTML = data.name;
       
       dateConvert(data);
}

    function dateConvert(data) {
        let options = {
        hour: "numeric" ,
        minute: "numeric"
        };
        let sunriseDatum = new Date(data.sys.sunrise * 1000);
        sunrise.innerHTML = sunriseDatum.toLocaleString("ru-RU", options);
        let sunsetDatum = new Date(data.sys.sunset * 1000);
        sunset.innerHTML = sunsetDatum.toLocaleString("ru-RU", options);
}
   export default getWeather;