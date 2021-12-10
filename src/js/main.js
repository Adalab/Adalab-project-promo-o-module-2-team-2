'use strict';

//Traer elementos
const collapsedHeader = document.querySelector('.js-collapsable-title1');

//handler
function handlerClickHeader(event){
event.currentTarget.classList.toggle('collapsed'); 
}
 
//listener
collapsedHeader.addEventListener('click', handlerClickHeader);


