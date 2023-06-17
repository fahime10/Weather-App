import { useWeatherAPI } from "./modules/weather.js";
import { findGif } from "./modules/gyphy.js";
import { validateCity } from "./modules/validate.js";

let country = document.querySelector("#country");
let city = document.querySelector("#city");
let temperature = document.querySelector("#temperature");

document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();

    let city = document.querySelector("#location").value;

    let validatedCity = validateCity(city);

    if (validatedCity != "") {

        const data = useWeatherAPI(validatedCity);

        console.log(data);

        applyCurrentInfo(data);

    } 


});

async function applyCurrentInfo(data) {
    country.textContent = await data.then((response) => { return response.location.country });
    city.textContent = await data.then((response) => { return response.location.name });
    temperature.textContent = await data.then((response) => { return response.current.temp_c });
}