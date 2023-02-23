import {getDate,  getTime } from "./DateAndTime";
import { kelvinToCelsius, kelvinToFahrenheit } from "./Temperature";

const addressDiv = document.querySelector(".address");
const dateDiv = document.querySelector(".date");
const timeDiv = document.querySelector(".time");
const windDiv = document.querySelector(".wind");
const humidityDiv = document.querySelector(".humidity");
const kelvinDiv = document.querySelector(".kelvin");
const temperatureDiv = document.querySelector(".temperature");
const descriptionDiv = document.querySelector(".description");

const spanTemperature = document.querySelector("#span-temperature");

const displayWeather = (weatherJSON,address) => {
    addressDiv.textContent = address;
    dateDiv.textContent = getDate();
    timeDiv.textContent = getTime();
    windDiv.textContent = weatherJSON.wind.speed;
    humidityDiv.textContent = weatherJSON.main.humidity;
    kelvinDiv.textContent = weatherJSON.main.temp;
    temperatureDiv.textContent = kelvinToCelsius(weatherJSON.main.temp);
    descriptionDiv.textContent = weatherJSON.weather[0].description;

}

const displayCelsius = () => {
    temperatureDiv.textContent = kelvinToCelsius(kelvinDiv.textContent);
    spanTemperature.textContent = "Celsius";
}

const displayFahrenheit = () => {
    temperatureDiv.textContent = kelvinToFahrenheit(kelvinDiv.textContent);
    spanTemperature.textContent = "Fahrenheit";
}

export {displayWeather, displayCelsius, displayFahrenheit};