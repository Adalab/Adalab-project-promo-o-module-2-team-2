'use strict';

//Traer elementos
const collapsedDesignHeader = document.querySelector('.js-collapsable-design');
const collapsedFillHeader = document.querySelector('.js-collapsable-fill');
const collapsedShareHeader = document.querySelector('.js-collapsable-share');

//handler
function handlerClickHeader(event){
    
    const currentTarget = event.currentTarget;
    console.log(currentTarget);
    currentTarget.parentNode.classList.toggle('collapsed');
}
 
//listener
collapsedDesignHeader.addEventListener('click', handlerClickHeader);
collapsedFillHeader.addEventListener('click', handlerClickHeader);
collapsedShareHeader.addEventListener('click', handlerClickHeader);



