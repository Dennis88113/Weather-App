import getWeather from '/modules/getWeather.js';
import currentTime from '/modules/currentTime.js';
import getForecast from '/modules/getForecast.js';
import getQuote from '/modules/getQuote.js';



function WeatherApp() {
getWeather();
currentTime();
getForecast();
getQuote();
}


 export default WeatherApp;
