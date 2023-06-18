export async function useGiphyAPI(value) {
    try {
        const gif = 
            await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XT9XjvLjB6JcU8vfL4Egl462Ab6m1wzn&s=${value}`, 
                {mode: 'cors'})
                .then((response) => { return response.json() })
                .then((object) => { return object.data.images.original.url });

        return await gif;

    } catch(error) {
        console.log(error);
    }
}