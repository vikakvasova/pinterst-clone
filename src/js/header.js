import { createElement } from "./functions.js";

function createHeader(){

///////основной скелет

    const wrap = createElement ("div", "wrap", null, null, root);
    const container = createElement ("div", "container", null, null, wrap);
    const header = createElement('header', 'header', null, null, container);



///////шапка

    const headerContainer = createElement('div', 'header-container', null, null, header);
    const pinIcon = createElement('div', 'pin-isSecureContext', null, null, headerContainer);
    const imgIcon = createElement('img', 'icon', null, null, pinIcon);
    imgIcon.setAttribute('src', 'icons/pinterest.ico');
    const headerInput = createElement('input', 'search', 'text', null, headerContainer);
    headerInput.setAttribute('placeholder', 'Поиск');
    headerInput.setAttribute('id', 'searchId');



 ///////Доски

    const dropdown = createElement('div', 'dropdown', null, null, headerContainer);
    const dropdownBtn = createElement('button', 'dropdown-btn', null, "Выбор доски", dropdown);
    const dropdownList = createElement('div', 'dropdown-list', null, null, dropdown);
    const listBtn1 = createElement('button', 'list-btn', null, 'Главная', dropdownList);
    const listBtn2 = createElement('button', 'list-btn', null, 'Доска 1', dropdownList);
    const listBtn3 = createElement('button', 'list-btn', null, 'Доска 2', dropdownList);
    const listBtn4 = createElement('button', 'list-btn', null, 'Доска 3', dropdownList);

    //////////////Возможно нужно будет добавить data-btn="1" id="10" для первой и data-btn="2" для омтальных/////////



///////Бургер

    const menuMobile = createElement('div', 'menu-mobile', null, null, headerContainer);
    const mobileBurger = createElement('button', 'mobile-burger', null, null, menuMobile);
    const mobileItems = createElement('div', 'mobile-items', null, null, menuMobile);
    const listBtn5 = createElement('button', 'list-btn', null, 'Главная', mobileItems);
    const listBtn6 = createElement('button', 'list-btn', null, 'Доска 1', mobileItems);
    const listBtn7 = createElement('button', 'list-btn', null, 'Доска 2', mobileItems);
    const listBtn8 = createElement('button', 'list-btn', null, 'Доска 3', mobileItems);



///////Создание досок

    const desks = createElement ("div", "desks", null, null, container);
}



export {createHeader}