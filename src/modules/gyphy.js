export function findGif(value) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XT9XjvLjB6JcU8vfL4Egl462Ab6m1wzn&s=${value}`, 
        {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    })
    .catch(function(error) {
        img.src = 'assets/error-img.png';
        console.log(error);
    }); 
}