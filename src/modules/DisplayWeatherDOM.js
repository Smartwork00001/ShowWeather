import {getDate,  getTime } from "./DateAndTime";
import { kelvinToCelsius } from "./Temperature";

const displayWeather = (weatherJSON,address) => {
    const addressDiv = document.querySelector(".address");
    const dateDiv = document.querySelector(".date");
    const timeDiv = document.querySelector(".time");
    const windDiv = document.querySelector(".wind");
    const humidityDiv = document.querySelector(".humidity");
    const temperatureDiv = document.querySelector(".temperature");
    const descriptionDiv = document.querySelector(".description");

    console.log(weatherJSON);
    addressDiv.textContent = address;
    dateDiv.textContent = getDate();
    timeDiv.textContent = getTime();
    windDiv.textContent = weatherJSON.wind.speed;
    humidityDiv.textContent = weatherJSON.main.humidity;
    temperatureDiv.textContent = kelvinToCelsius(weatherJSON.main.temp);
    descriptionDiv.textContent = weatherJSON.weather[0].description;

}

export default displayWeather;