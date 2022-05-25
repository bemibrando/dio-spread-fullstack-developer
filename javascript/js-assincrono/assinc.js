const BASE_URL = "https://api.thecatapi.com/v1/images/search/";
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        console.log(json.url);
        return json.url;
    } catch (err){
        console.log(err.message);
    }
}

const loadImg = async () => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();