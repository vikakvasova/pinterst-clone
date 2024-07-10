function getPinterest() {
    return localStorage.getItem('gallery');
}
function setPinterest(array) {
    return localStorage.setItem('gallery', JSON.stringify(array));
}

function getDeskOne() {
    return localStorage.getItem('deskOne');
}
function setDeskOne(array) {
    return localStorage.setItem('deskOne', JSON.stringify(array));
}

function getDeskTwo() {
    return localStorage.getItem('deskTwo');
}
function setDeskTwo(array) {
    return localStorage.setItem('deskTwo', JSON.stringify(array));
}

function getDeskThree() {
    return localStorage.getItem('deskThree');
}
function setDeskThree(array) {
    return localStorage.setItem('deskThree', JSON.stringify(array));
}

export{getPinterest, setPinterest, getDeskOne, setDeskOne, getDeskTwo, setDeskTwo, getDeskThree, setDeskThree}