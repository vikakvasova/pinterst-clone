import { createPinterest } from "./createPinterest.js";
import { setPinterest } from "./localstorage.js";

let newImages = [];

function setImages(newArray) {
    newImages = newArray;
}

const URL_API = 'https://62b0c0c4e460b79df04c901b.mockapi.io/api';
async function getPinterestImage() {
    const response = await fetch(`${URL_API}/pinterest`);
    const pinterest = await response.json();
    return pinterest;
}
function createPinIo() {
    getPinterestImage().then((pinterest) => {
        pinterest.forEach(({id, name, avatar, description, hashtag}) => {
            let gallery = {};
            gallery.id = id;
            gallery.name = name;
            gallery.description = description;
            gallery.avatar = avatar;
            gallery.hashtag = hashtag;
            newImages.push(gallery);
            createPinterest(gallery); 
            setPinterest(newImages);
            });
    })
}


export {getPinterestImage, createPinIo, newImages, setImages}