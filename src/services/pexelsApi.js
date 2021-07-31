const API_KEY = "563492ad6f917000010000018269bac11b4e480ea26b343f7de49058";
const URL_BASE = "https://api.pexels.com/v1"


export const getImages = async() => {
    const peticion = await fetch(URL_BASE+"/curated?&per_page=100", {
        headers: {
            "Authorization": API_KEY
        }
    });
    const data = await peticion.json();
    return data.photos;
}

export const getImagesBySearch = async(word) => {
    const peticion = await fetch(`${URL_BASE}/search?query=${word}&per_page=100`,{
        headers: {
            "Authorization": API_KEY
        },
    });
    const data = await peticion.json();
    return data.photos;
}
