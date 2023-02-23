import "./style.css";
import {
  displayWeather,
  displayCelsius,
  displayFahrenheit,
} from "./modules/DisplayWeatherDOM";
import getLatLong from "./modules/GetLatLongFromAddress";
import getWeather from "./modules/GetWeather";
import { getAddress, setAddress } from "./GlobalVariables";

const locationSubmitButton = document.querySelector("#submitLocation");
const celsiusButton = document.querySelector(".celsius");
const fahrenheitButton = document.querySelector(".fahrenheit");
const refreshButton = document.querySelector(".refresh");

const getLocation = async function (event) {
  event.preventDefault();
  const form = document.forms.getLocation;
  const formData = new FormData(form);
  form.reset();
  setAddress(formData.get("address"));
  const latLong = await getLatLong(formData.get("address"));
  const weatherJSON = await getWeather(latLong.lat, latLong.long);
  displayWeather(weatherJSON, formData.get("address"));
  // console.log(formData.get("locationCity"), formData.get("locationCountry"));
};

const changeToCelsius = function () {
  displayCelsius();
};

const changeToFahrenheit = function () {
  displayFahrenheit();
};

const refreshWeather = async () => {
  const latLong = await getLatLong(getAddress());
  const weatherJSON = await getWeather(latLong.lat, latLong.long);
  displayWeather(weatherJSON, getAddress());
};

locationSubmitButton.addEventListener("click", getLocation);
celsiusButton.addEventListener("click", changeToCelsius);
fahrenheitButton.addEventListener("click", changeToFahrenheit);
refreshButton.addEventListener("click", refreshWeather);
