'use strict';
// const collapsableHeader = document.querySelector ('.js_collapsable_title');

// function handlerClickHeader() {
//     collapsableHeader.classList.add('collapsed');
// }
// collapsableHeader.addEventListener('click', handlerClickHeader);

const collapsableHeader = document.querySelector('.js_collapsable_title');
function handlerClickHeader() {
  event.currentTarget.parentNode.classList.toggle('collapsed');
}
collapsableHeader.addEventListener('click', handlerClickHeader);

const collapsableHeader2 = document.querySelector('.js_collapsable2_title');
collapsableHeader2.addEventListener('click', handlerClickHeader);

const collapsableHeader3 = document.querySelector('.js_collapsable2_title');
collapsableHeader3.addEventListener('click', handlerClickHeader);
