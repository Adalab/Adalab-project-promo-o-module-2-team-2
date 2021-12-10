'use strict';
// const collapsableHeader = document.querySelector ('.js_collapsable_title');

// function handlerClickHeader() {
//     collapsableHeader.classList.add('collapsed');
// }
// collapsableHeader.addEventListener('click', handlerClickHeader);

//<----------------- Colapsable (versión 2) ----------------->

const collapsableHeader = document.querySelector('.js_collapsable_title');
function handlerClickHeader(event) {
  event.currentTarget.parentNode.classList.toggle('collapsed');
}
collapsableHeader.addEventListener('click', handlerClickHeader);

const collapsableHeader2 = document.querySelector('.js_collapsable2_title');
collapsableHeader2.addEventListener('click', handlerClickHeader);

const collapsableHeader3 = document.querySelector('.js_collapsable2_title');
collapsableHeader3.addEventListener('click', handlerClickHeader);

//<----------------- Input ----------------->

const nameInput = document.querySelector('.js_name');
const jobInput = document.querySelector('.js_job');
const emailInput = document.querySelector('.js_email');

const namePreview = document.querySelector('.js_preview_name');
const namePreview = document.querySelector('.js_preview_email');

function handleKeyName() {
  console.log(nameInput.value);
  namePreview.innerHTML = nameInput.value;
}
function handleKeyEmail() {
  console.log(emailInput.value);
  emailPreview.href = `mailito: ${emailInput.value}`;
}
nameInput.addEventListener('keyup', handleKeyName);
emailInput.addEventListener('keyup', handleKeyEmail);
