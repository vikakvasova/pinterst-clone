
import { contents } from "./saveNewDeskLS.js";
import { helper, imageOut } from "./app.js";
import { btnMain } from "./search.js";

function createBurgerMenu(){
    const burgerMenu = document.querySelector('.mobile-burger');
    
    burgerMenu.addEventListener('click', () => {
    if (mobileItems.style.display == 'block') {
        mobileItems.style.display = 'none';
    } else {
        mobileItems.style.display = 'block';
    }
    });

    const mobileItems = document.querySelector('.mobile-items');
    
    mobileItems.addEventListener('click', (event) => {
    const currentTab = event.target.dataset.btn;
    change(event.target);
    for (let i = 0; i < contents.children.length; i++) {
        contents.children[i].classList.remove('activeMain');
        contents.children[i].classList.remove('active');
    if (currentTab === '1' ) {
        contents.classList.remove('activeDesk');
        imageOut.classList.add('activeMain'); 
    } else if (contents.children[i].dataset.content === currentTab) {
        contents.children[i].classList.add('active');
        contents.classList.add('activeDesk')
    }
    helper.innerHTML = '';
}
    });
    const menuMobile = document.querySelector('.menu-mobile');
    const change = (element) => {
    for (let i = 0; i < mobileItems.children.length; i++) {
        mobileItems.children[i].classList.remove('active');
    }
    element.classList.add('active');
    };
    
    btnMain.addEventListener('click', () => {
    imageOut.classList.add('activeMain');
    });

}