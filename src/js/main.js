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

//<----------------------------- Inputs Preview ----------------------------->
//<----------------------------------****---------------------------------->

//<----------------------- *** Name Input *** ----------------------->
//Elemento HTML para name
const nameInput = document.querySelector('.js_name');
//Elemento HTML para titulo de la card
const previewName = document.querySelector('.js_preview_title');

//Hadler input name
function handleKeyName() {
  previewName.innerHTML = nameInput.value;
}

//Listener para name
nameInput.addEventListener('keyup', handleKeyName);

//<----------------------- *** Job Input *** ----------------------->
//Elemento HTML para job
const jobInput = document.querySelector('.js_job');
//Elemento HTML para titulo de la card
const previewJob = document.querySelector('.js_preview_subtitle');

//Hadler input job
function handleKeyJob() {
  previewJob.innerHTML = jobInput.value;
}

//Listener para job
jobInput.addEventListener('keyup', handleKeyJob);

//<----------------------- *** Email Input *** ----------------------->
//Elemento HTML para email
const emailInput = document.querySelector('.js_email');
//Elemento HTML para el icono "sobre" de la card
const previewEmail = document.querySelector('.js-envelope');

//Hadler input email
function handleKeyEmail() {
  previewEmail.href = `mailto:${emailInput.value}`;
}

//Listener para email
emailInput.addEventListener('keyup', handleKeyEmail);

//<----------------------- *** Phone Input *** ----------------------->
//Elemento HTML para phone
const phoneInput = document.querySelector('.js_phone');
//Elemento HTML para el icono "teléfono" de la card
const previewPhone = document.querySelector('.js-phoneIcon');

//Hadler input phone
function handleKeyPhone() {
  previewPhone.href = phoneInput.value;
}

//Listener para phone
phoneInput.addEventListener('keyup', handleKeyPhone);

//<----------------------- *** Linkedin Input *** ----------------------->
//Elemento HTML para linkedin
const linkedinInput = document.querySelector('.js_linkedin');
//Elemento HTML para el icono "Linkedin" de la card
const previewLinkedin = document.querySelector('.js-linkedinIcon');

//Hadler input linkedin
function handleKeyLinkedin() {
  previewLinkedin.href = linkedinInput.value;
}

//Listener para linkedin
linkedinInput.addEventListener('keyup', handleKeyLinkedin);

//<----------------------- *** GitHub Input *** ----------------------->
//Elemento HTML para github
const githubInput = document.querySelector('.js_github');
//Elemento HTML para el icono "GitHub" de la card
const previewGithub = document.querySelector('.js-githubIcon');

//Hadler input github
function handleKeyGithub() {
  previewGithub.href = githubInput.value;
}

//Listener para github
githubInput.addEventListener('keyup', handleKeyGithub);
