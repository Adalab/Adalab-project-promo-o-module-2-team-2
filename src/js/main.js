// 'use strict';
// //<----------------- Colapsable (versión 1) ----------------->
// // const collapsableHeader = document.querySelector ('.js_collapsable_title');

// // function handlerClickHeader() {
// //     collapsableHeader.classList.add('collapsed');
// // }
// // collapsableHeader.addEventListener('click', handlerClickHeader);

// //<----------------- Colapsable (versión 2) ----------------->

// const collapsableHeader = document.querySelector('.js_collapsable_title');
// function handlerClickHeader(event) {
//   event.currentTarget.parentNode.classList.toggle('collapsed');
// }
// collapsableHeader.addEventListener('click', handlerClickHeader);

// const collapsableHeader2 = document.querySelector('.js_collapsable2_title');
// collapsableHeader2.addEventListener('click', handlerClickHeader);

// const collapsableHeader3 = document.querySelector('.js_collapsable2_title');
// collapsableHeader3.addEventListener('click', handlerClickHeader);

// //<----------------- Input ----------------->

// const nameInput = document.querySelector('.js_name');
// const jobInput = document.querySelector('.js_job');
// const emailInput = document.querySelector('.js_email');

// const namePreview = document.querySelector('.js_preview_name');
// const namePreview = document.querySelector('.js_preview_email');

// function handleKeyName() {
//   console.log(nameInput.value);
//   namePreview.innerHTML = nameInput.value;
// }
// function handleKeyEmail() {
//   console.log(emailInput.value);
//   emailPreview.href = `mailito: ${emailInput.value}`;
// }
// nameInput.addEventListener('keyup', handleKeyName);
// emailInput.addEventListener('keyup', handleKeyEmail);

// //<----------------- Input version 2 ----------------->
// const data = {
//   name: '',
//   job: '',
//   email: '',
// };
//<----------------------------- Forma Larga ----------------------------->
//<----------------------------------****---------------------------------->

// //<----------------------- *** Design Section*** ----------------------->
// //Elemento HTML para design
// const collapsableTitle1 = document.querySelector('.js_collapsable_title_design');
// //Hadler para design
// function handlerClickTitle() {
//   const contentElement = document.querySelector('.js_design_content');
//   contentElement.classList.toggle('collapsed');
// }
// //Listener para design
// collapsableTitle1.addEventListener('click', handlerClickTitle);

// //<----------------------- *** Fill Section*** ----------------------->
// //Elemento HTML para fill
// const collapsableTitle2 = document.querySelector('.js_collapsable_title_fill');
// //Hadler para fill
// function handlerClickTitle2() {
//   const contentElement = document.querySelector('.js_fill_content');
//   contentElement.classList.toggle('collapsed');
// }
// //Listener para fill
// collapsableTitle2.addEventListener('click', handlerClickTitle2);

// //<----------------------- *** Share Section*** ----------------------->
// //Elemento HTML para share
// const collapsableTitle3 = document.querySelector('.js_collapsable_title_share');
// //Hadler para share
// function handlerClickTitle3() {
//   const contentElement = document.querySelector('.js_share_content');
//   contentElement.classList.toggle('collapsed');
// }
// //Listener para share
// collapsableTitle3.addEventListener('click', handlerClickTitle3);

//<----------------------------- Forma Corta ----------------------------->
//<----------------------------------****---------------------------------->
//Elemento HTML para design
const collapsableTitle1 = document.querySelector('.js_collapsable_title_design');
//Elemento HTML para fill
const collapsableTitle2 = document.querySelector('.js_collapsable_title_fill');
//Elemento HTML para share
const collapsableTitle3 = document.querySelector('.js_collapsable_title_share');

//Hadler para design
function handlerClickTitle(event) {
  event.currentTarget.parentNode.classList.toggle('collapsed');
}
//Listener para design
collapsableTitle1.addEventListener('click', handlerClickTitle);
//Listener para fill
collapsableTitle2.addEventListener('click', handlerClickTitle);
//Listener para share
collapsableTitle3.addEventListener('click', handlerClickTitle);
