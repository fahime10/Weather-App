import { useWeatherAPI } from "./modules/weather.js";
import { findGif } from "./modules/gyphy.js";
import { validateCity } from "./modules/validate.js";

let status = document.querySelector("#status");
let country = document.querySelector("#country");
let city = document.querySelector("#city");
let temperature = document.querySelector("#temperature");

let feels_like = document.querySelector("#feels-like-temp");
let humididty_value = document.querySelector("#humidity-value");
let chance_rain = document.querySelector("#chance-rain");
let wind_speed = document.querySelector("#wind-speed");

document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();

    let city = document.querySelector("#location").value;

    let validatedCity = validateCity(city);

    if (validatedCity != "") {
        document.querySelector(".error").textContent = "";

        const data = useWeatherAPI(validatedCity);

        applyCurrentInfo(data);
        applyOtherInfo(data);

    } else {
        document.querySelector(".error").textContent = "Please enter a sensible city name";
    }
});

async function applyCurrentInfo(data) {
    status.textContent = await data.then((response) => { return response.current.condition.text });
    country.textContent = await data.then((response) => { return response.location.country });
    city.textContent = await data.then((response) => { return response.location.name });
    temperature.textContent = await data.then((response) => { return response.current.temp_c });
}

async function applyOtherInfo(data) {
    console.log(data);

    feels_like.textContent = await data.then((response) => { return response.current.feelslike_c });
    humididty_value.textContent = await data.then((response) => { return response.current.humidity });
    chance_rain.textContent = await data.then((response) => { return response.current.precip_in });
    wind_speed.textContent = await data.then((response) => { return response.current.wind_mph });
}