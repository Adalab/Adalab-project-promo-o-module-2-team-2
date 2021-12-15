'use strict';

//Elemento HTML para design
const collapsableTitle1 = document.querySelector('.js_collapsable_title_design');
//Elemento HTML para fill
const collapsableTitle2 = document.querySelector('.js_collapsable_title_fill');
//Elemento HTML para share
const collapsableTitle3 = document.querySelector('.js_collapsable_title_share');

//Hadler para todos
function handlerClickTitle(event) {
  //Para escribir menos, meto "event.currentTarget" en una constante
  const elementSelected = event.currentTarget;
  //Condicional para que se colapse el elemento que queda abierto (y su flecha gire)
  if (!event.currentTarget.parentNode.classList.contains('collapsed')) {
    elementSelected.parentNode.classList.toggle('collapsed');
    elementSelected.querySelector('.js-arrow').classList.toggle('rotate');
    return;
  }
  //Elemento HTML comun para todos los title
  const collapsableTitleList = document.querySelectorAll('.js_title_list');

  //Bucle para que los elementos de "collapsableTitleList" sean recorridos uno a uno y colapsados (e igual con la flecha).
  for (let i = 0; i < collapsableTitleList.length; i++) {
    collapsableTitleList[i].parentNode.classList.add('collapsed');
    collapsableTitleList[i].querySelector('.js-arrow').classList.remove('rotate');
  }
  
  //Colapsar y rotar flecha al clickar
  elementSelected.parentNode.classList.toggle('collapsed');
  elementSelected.querySelector('.js-arrow').classList.toggle('rotate');
  
}

//Listener para design
collapsableTitle1.addEventListener('click', handlerClickTitle);
//Listener para fill
collapsableTitle2.addEventListener('click', handlerClickTitle);
//Listener para share
collapsableTitle3.addEventListener('click', handlerClickTitle);

/*
//Gestión de los inputs

//Creación de objeto
const userData = {
  name: '',
  position: '',
  email: '',
  tel: '',
  linkedin: '', 
  github: '',
  photo: '',
  palette: 1

};

//Traer elementos HTML
const allInputs = document.querySelectorAll('.js_input');
const namePreview = document.querySelector('.js_preview_title');
const positionPreview = document.querySelector('.js_preview_subtitle');
const telPreview = document.querySelector('.js-phone');
const emailPreview = document.querySelector('.js-envelope');
const linkedinPreview = document.querySelector('.js-linkedinIcon');
const githubPreview = document.querySelector('.js-githubIcon');


//Funciones

function renderPreview () {

  namePreview.innerHTML = userData.name;
  positionPreview.innerHTML = userData.position;
  telPreview.href = `tel:+34${userData.tel}`;
  emailPreview.href = `mailto:${userData.email}`;
  linkedinPreview.href = `https://www.linkedin.com/in/${userData.linkedin}`;
  githubPreview.href = `https://www.github.com/${userData.github}`;

  if (userData.name === '') {
    namePreview.innerHTML = 'Nombre Apellido';
  } else {
    namePreview.innerHTML = userData.name;
  }
}

//Handler
function handleKeyUpWriteInputs(event) {
  const inputValue = event.currentTarget.value;
  renderPreview();
  
}

//Listener
allInputs.addEventListener('keyup', handleKeyUpWriteInputs); */


//NOMBRE
//Traer html
const namePreview = document.querySelector('.js_preview_title');
const nameInput = document.querySelector('.js_name');

//handler
function writeName () {
  if (nameInput.value === ('')) {
    namePreview.innerHTML = 'Nombre Apellido';

  } else {
  namePreview.innerHTML = nameInput.value;
  }
}

//listener
nameInput.addEventListener('keyup', writeName);