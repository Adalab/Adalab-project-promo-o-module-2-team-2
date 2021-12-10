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

//<----------------------------- Forma Optimizada ----------------------------->
//<----------------------------------****---------------------------------->
//Elemento HTML para design
const collapsableTitle1 = document.querySelector('.js_collapsable_title_design');
//Elemento HTML para fill
const collapsableTitle2 = document.querySelector('.js_collapsable_title_fill');
//Elemento HTML para share
const collapsableTitle3 = document.querySelector('.js_collapsable_title_share');

//Hadler para todos
function handlerClickTitle(event) {
  const elementSelected = event.currentTarget;
  elementSelected.parentNode.classList.toggle('collapsed');
  elementSelected.querySelector('.js-arrow').classList.toggle('rotate');
}
//Listener para design
collapsableTitle1.addEventListener('click', handlerClickTitle);
//Listener para fill
collapsableTitle2.addEventListener('click', handlerClickTitle);
//Listener para share
collapsableTitle3.addEventListener('click', handlerClickTitle);
