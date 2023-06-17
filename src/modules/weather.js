export async function useWeatherAPI(city) {
    try {
        const response = 
            await fetch(`https://api.weatherapi.com/v1/current.json?key=bb29db4074ae448e94c125809231506&q=${city}`, 
                {mode: "cors"});

        return await response.json();

    } catch(error) {
        console.log("Sorry, something went wrong, try again later whenever the weather is right");
    }
}