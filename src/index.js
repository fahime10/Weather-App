import { useWeatherAPI } from "./modules/weather.js";
import { useGiphyAPI } from "./modules/gyphy.js";
import { validateCity } from "./modules/validate.js";

let status = document.querySelector("#status");
let country = document.querySelector("#country");
let city = document.querySelector("#city");
let temperature = document.querySelector("#temperature");

let feels_like = document.querySelector("#feels-like-temp");
let humididty_value = document.querySelector("#humidity-value");
let chance_rain = document.querySelector("#chance-rain");
let wind_speed = document.querySelector("#wind-speed");

let image = document.querySelector("#result");

document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();

    let city = document.querySelector("#location").value;

    let validatedCity = validateCity(city);

    if (validatedCity != "") {
        document.querySelector(".error").textContent = "";

        const data = useWeatherAPI(validatedCity);

        Promise.resolve(applyCurrentInfo(data));
        Promise.resolve(applyOtherInfo(data));
        Promise.resolve(findGif());

    } else {
        document.querySelector(".error").textContent = "Please enter a sensible city name";
        image.src = "../src/assets/error-img.png";
    }
});

async function applyCurrentInfo(data) {
    status.textContent = await data.then((response) => { return response.current.condition.text });
    country.textContent = await data.then((response) => { return response.location.country });
    city.textContent = await data.then((response) => { return response.location.name });
    temperature.textContent = await data.then((response) => { return response.current.temp_c + " °C"});
}

async function applyOtherInfo(data) {
    feels_like.textContent = await data.then((response) => { return response.current.feelslike_c + " °C"});
    humididty_value.textContent = await data.then((response) => { return response.current.humidity + "%"});
    chance_rain.textContent = await data.then((response) => { return response.current.precip_in + "%" });
    wind_speed.textContent = await data.then((response) => { return response.current.wind_mph + " mph" });
}

async function findGif() {
    if (temperature <= 0) {
        image.src = await useGiphyAPI("ice");
    } else if (temperature > 0 && temperature <= 10) {
        image.src = await useGiphyAPI("cold-temperature");
    } else if (temperature > 10 && temperature <= 30) {
        image.src = await useGiphyAPI("sunny");
    } else {
        image.src = await useGiphyAPI("hot-temperature");
    }
}