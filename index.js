async function fetchdata() {
    let response = await fetch (
        `https://api.giphy.com/v1/gifs/search?api_key=KD2luxQLSt50Xev1SHSEPHrT92raj4If&q=pizza&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
);

let giphyJson = await response.json();
let arrPictures = giphyJson.data;



}