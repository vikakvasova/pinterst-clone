import { createElement } from "./functions.js";
import { setPinterest, getPinterest } from "./localstorage.js";
import { currentImage } from "./main.js";

function createPinterest(){ 
    const wrapper = createElement('div', 'wrapper', null, null, root);
    const imgContainer = createElement('div', 'img-container', null, null, wrapper);
    const about = createElement('div', 'about', null, null, wrapper);
    const img = createElement('img', 'image', null, null, imgContainer);
    const avatar = createElement('img', 'bkg-img', null, null, about);
    const info = createElement('h5', 'info', null, null, about);
    const hoverMenu = createElement('div', 'hover-menu', null, null, imgContainer);
    const linkSave = createElement('button', 'link', null, 'Сохранить пин', hoverMenu);

    function saveImg(blob) {
    let link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", `${Date.now()}`);
    link.click();
    }
    linkSave.addEventListener("click", () => {
    fetch(img.src)
    .then((response_object) => response_object.blob())
    .then((blob_object) => saveImg(blob_object));
    });

    const btnAdd = createElement('button', 'btn-add', null, 'Добавить на доску', hoverMenu);
    
    btnAdd.addEventListener("click", (event) => {
    imageWrapper.innerHTML = "";
    if (event.target.closest(".wrapper")) {
        currentImg.src = event.target.name;
        currentImg.style.cssText = imageStyle;
        imageWrapper.append(currentImg);
    }
    modal();
    openModal();
    });

const btnPin = createElement('button', 'btn-pin', null, 'Скрыть пин', hoverMenu);
btnPin.addEventListener("click", () => {
    setImages(
        newImages.filter((item) => {
        if (item.name !== obj.name) {
            imageOut.addEventListener("click", (event) => {
            if (event.target.className != "btnPin") return;
            let pane = event.target.closest(".wrapper");
            pane.style.opacity = "0.9";
            let hoverPin = document.createElement("div");
            hoverPin.classList.add("hoverPin");
            hoverPin.innerHTML = "Вы больше не увидите этот пин";
            pane.append(hoverPin);
            });
            return item;
        }
        })
    );
    setPinterest(newImages);
    });


    const btnComplaine = createElement('button', 'btn-complaine', null, 'Пожаловаться', hoverMenu);
    btnComplaine.addEventListener("click", function modalComplain() {
        popoutComplain.style.display = "block";
        nextBtn.addEventListener("click", () => {
            setImages(
            newImages.filter((item) => {
                if (item.name !== obj.name) {
                return item;
                }
            })
            );
            setPinterest(newImages);
        });
        });
}

export{createPinterest}
