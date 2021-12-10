'use strict';

//Traer elementos
const collapsedDesignHeader = document.querySelector('.js-collapsable-design');
const collapsedFillHeader = document.querySelector('.js-collapsable-fill');
const collapsedShareHeader = document.querySelector('.js-collapsable-share');
const arrowElement = document.querySelector('.js-arrow');

//handler
function handlerClickHeader(event){
    const currentTarget = event.currentTarget;
    currentTarget.parentNode.classList.toggle('collapsed');
    currentTarget.querySelector('.js-arrow').classList.toggle('rotate');
}
 
//listener
collapsedDesignHeader.addEventListener('click', handlerClickHeader);
collapsedFillHeader.addEventListener('click', handlerClickHeader);
collapsedShareHeader.addEventListener('click', handlerClickHeader);



