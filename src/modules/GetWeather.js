const getWeather = async (lat,long) => {
    const APIkey = "d71489546ede021d72f1f39fb19ad36b";
    const weatherApiResult = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`);
    const responseJson = await weatherApiResult.json();
    return responseJson;
    // d71489546ede021d72f1f39fb19ad36b
    // `https://api.openweathermap.org/data/2.5/weather?lat=30.5595&lon=22.9375&appid=${APIkey}`
}

export default getWeather;