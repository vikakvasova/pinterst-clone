import { createElement } from "./functions.js";
import { createHeader } from "./header.js";



function createDesksactions(){

///////Поиск desks

    let desks = root.querySelector('.desks');
    const deskContainer = createElement('div', 'desk-container', null, null, desks);

    const helper = createElement('div', 'helper', null, null, deskContainer);



///////контент

    const contents = createElement('section', 'contents', null, null, deskContainer);

    const imgContentMain = createElement('div', 'img-content', 'main', null, contents);
    const sizer = createElement('div', 'sizer', null, null, imgContentMain);
    const imgContent1 = createElement('div', 'img-content', null, null, contents);
    const imgContent2 = createElement('div', 'img-content', null, null, contents);
    const imgContent3 = createElement('div', 'img-content', null, null, contents);

    const helperDesk = createElement('div', 'helper-desk', null, null, deskContainer);



/////// Выбрать или создать доску

    const chooseDeskSection = createElement('section', 'choose-section', null, null, deskContainer);
    const modal = createElement('div', 'modal', null, null, chooseDeskSection);
    const modalDialog = createElement('div', 'modal-dialog', null, null, modal);
    const modalContent = createElement('div', 'modal-content', null, null, modalDialog);
    const wrapImg = createElement('div', 'wrap-img', null, null, modalContent);
    const modalChoose = createElement('div', 'modal-choose', null, null, modalContent);
    const chooseDesk = createElement('h5', 'choose-desk', null, 'Выбрать доску', modalChoose);
    const modalButton = createElement('div', 'modal-button', null, null, modalChoose);
    const chooseBtn1 = createElement('button', 'choose-button', null, null, modalButton);
    const chooseBtn2 = createElement('button', 'choose-button', null, null, modalButton);
    const chooseBtn3 = createElement('button', 'choose-button', null, null, modalButton);
    const chooseBtn4 = createElement('button', 'choose-button', null, 'Создать доску', modalChoose);

    chooseBtn4.addEventListener("click", () => {
    createInput.value = "";
    wrapImgCreate.innerHTML = "";
    wrapImgCreate.append(currentImg);
    closeModal();
    modalCreateDesk();
    openModalCreateDesk();
    });






///////Сохранение доски

const createDeskSection = createElement('section', 'create-section', null, null, deskContainer);
const modalCreateDesk = createElement('div', 'modal-create-desk', null, null, createDeskSection);
const modalDialogCreate = createElement('div', 'modal-dialog-create', null, null, modalCreateDesk);
const modalContentCreate = createElement('div', 'modal-content-create', null, null, modalDialogCreate);
const wrapImgCreate = createElement('div', 'wrap-img-create', null, null, modalContentCreate);
const createInfo = createElement('div', 'create-info', null, null, modalContentCreate);
const createInput = createElement('input', 'input-create', 'text', null, createInfo);
    createInput.setAttribute('placeholder', 'Введите название доски'); 
const createBtn = createElement('button', 'save', null, 'Сохранить', createInfo);





///////Удаление доски

const DeleteDeskSection = createElement('section', 'delete-section', null, null, deskContainer);
const modalDeleteDesk = createElement('div', 'modal-delete-desk', null, null, DeleteDeskSection);
const modalDialogDelete = createElement('div', 'modal-dialog-delete', null, null, modalDeleteDesk);
const modalContentDelete = createElement('div', 'modal-content-delete', null, null, modalDialogDelete);
const deleteTitle = createElement('div', 'delete-title', null, 'Вы действительно хотите удалить доску?', modalContentDelete);
const deleteBtn = createElement('button', 'delete', null, 'Удалить', modalContentDelete);




///////Жалоба на пин

const complain = createElement('section', 'complain', null, null, deskContainer);
const modalComplain = createElement('div', 'modal-complain', null, null, complain);
const contentComplain = createElement('div', 'complain-content', null, null, modalComplain);
const complainText = createElement('h2', 'complain-text', null, 'Жалоба на пин', contentComplain);
const restrict = createElement('div', 'restrict', null, null, contentComplain);

const inputComplain1 = createElement('input', 'input-complain', 'radio', 'Спам', restrict);
inputComplain.setAttribute('p', 'Вводящие в заблуждение или повторяющиеся публикации');
inputComplain.setAttribute('id','spam');
const inputComplain2 = createElement('input', 'input-complain', 'radio', 'Обнаженное тело или порнография', restrict);
inputComplain2.setAttribute('p', 'Содержимое сексуального характера');
inputComplain2.setAttribute('id','pornography');
const inputComplain3 = createElement('input', 'input-complain', 'radio', 'Членовредительство', restrict);
inputComplain3.setAttribute('p', 'Расстройства пищевого поведения, нанесение травм себе, суицид');
inputComplain3.setAttribute('id','selfharm');
const inputComplain4 = createElement('input', 'input-complain', 'radio', 'Ложная инфнормация', restrict);
inputComplain4.setAttribute('p', ' Ложная информация о здоровье, климате, голосованиях или теории заговора');
inputComplain4.setAttribute('id','lie');
const inputComplain5 = createElement('input', 'input-complain', 'radio', 'Агрессивные действияия', restrict);
inputComplain5.setAttribute('p', ' Предрассудки, стереотипы, идея превосходства белой расы, оскорбления');
inputComplain5.setAttribute('id','agression');
const inputComplain6 = createElement('input', 'input-complain', 'radio', 'Нарушение конфиденциальности', restrict);
inputComplain6.setAttribute('p', ' Наркотики, оружие, регулируемые товары');
inputComplain6.setAttribute('id','danger');
const inputComplain7 = createElement('input', 'input-complain', 'radio', 'Ложная инфнормация', restrict);
inputComplain7.setAttribute('p', ' Оскорбления, угрозы, публикация персональных данных');
inputComplain7.setAttribute('id','stalkering');
const inputComplain8 = createElement('input', 'input-complain', 'radio', 'Сцены насилия', restrict);
inputComplain8.setAttribute('p', ' Графическое изображение или пропаганда насилия');
inputComplain8.setAttribute('id','violence');
const inputComplain9 = createElement('input', 'input-complain', 'radio', 'Интеллектуальная собственность', restrict);
inputComplain9.setAttribute('p', 'Нарушение авторских прав или прав на товарный знак');
inputComplain9.setAttribute('id','author');


const complainlButton = createElement('div', 'complain-button', null, null, contentComplain);
const cancelBtn = createElement('button', 'cancel-button', null, 'Отмена', complainlButton);
const nextBtn = createElement('button', 'next-button', null, 'Далее', complainlButton);



}

export{createDesksactions}