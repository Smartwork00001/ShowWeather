import displayWeather from "./modules/DisplayWeatherDOM";
import getLatLong from "./modules/GetLatLongFromAddress";
import getWeather from "./modules/GetWeather";

const locationSubmitButton = document.querySelector("#submitLocation");
const celsiusDiv = document.querySelector(".celsius");
const fahrenheitDiv = document.querySelector(".fahrenheit");

const getLocation = async function(event){
    event.preventDefault();
    const form = document.forms.getLocation;
    const formData = new FormData(form);
    form.reset();
    const latLong = await getLatLong(formData.get("address"));
    const weatherJSON = await getWeather(latLong.lat, latLong.long);
    displayWeather(weatherJSON,formData.get("address"));
    // console.log(formData.get("locationCity"), formData.get("locationCountry"));
}

const changeToCelsius = function(){

}

const changeToFahrenheit = function(){

}

locationSubmitButton.addEventListener("click",getLocation);
celsiusDiv.addEventListener("click",changeToCelsius);
fahrenheitDiv.addEventListener("click",changeToFahrenheit);