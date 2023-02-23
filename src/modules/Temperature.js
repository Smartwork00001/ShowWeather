const kelvinToCelsius = (kelvin) => {
    const kelvinTemp = kelvin*1;
    return Math.round(((kelvinTemp - 273.15)*100)/100);
}

const kelvinToFahrenheit = (kelvin) => {
    const kelvinTemp = kelvin * 1;
    const fahrenheit = (kelvinTemp - 273.15) * 9 / 5 + 32;
    return Math.round((fahrenheit*100)/100);
}

export {kelvinToCelsius,kelvinToFahrenheit};
