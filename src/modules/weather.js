export async function useWeatherAPI() {
    try {
        const response = 
            await fetch("https://api.weatherapi.com/v1/current.json?key=bb29db4074ae448e94c125809231506&q=london", 
                {mode: "cors"});

        const data = await response.json();

        console.log(data);
        console.log(data.current.feelslike_c);

    } catch(error) {
        console.log("Sorry, something went wrong, try again later whenever the weather is right");
    }
}