
const descriptionEl = document.getElementById("description");
const imageEl = document.getElementById("image");

let url = "https://api.nasa.gov/planetary/apod?api_key=vWyR7u69FxGf3P1axBCpGaPWb8Mxo7dd9Nz1awli"


const nasa = async () => {
    const response = await fetch(url);
    
    const data = await response.json();
    descriptionEl.textContent = data.explanation;
    imageEl.src = data.url;
} 
nasa();