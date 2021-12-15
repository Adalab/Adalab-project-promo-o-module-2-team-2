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

//<----------------------------- Inputs Preview ----------------------------->
//<----------------------------------****---------------------------------->

// //<----------------------- *** Name Input *** ----------------------->
// //Elemento HTML para name
// const nameInput = document.querySelector('.js_name');
// //Elemento HTML para titulo de la card
// const previewName = document.querySelector('.js_preview_title');

// //Hadler input name
// function handleKeyName() {
//   previewName.innerHTML = nameInput.value;
// }

// //Listener para name
// nameInput.addEventListener('keyup', handleKeyName);

// //<----------------------- *** Job Input *** ----------------------->
// //Elemento HTML para job
// const jobInput = document.querySelector('.js_job');
// //Elemento HTML para titulo de la card
// const previewJob = document.querySelector('.js_preview_subtitle');

// //Hadler input job
// function handleKeyJob() {
//   previewJob.innerHTML = jobInput.value;
// }

// //Listener para job
// jobInput.addEventListener('keyup', handleKeyJob);

// //<----------------------- *** Email Input *** ----------------------->
// //Elemento HTML para email
// const emailInput = document.querySelector('.js_email');
// //Elemento HTML para el icono "sobre" de la card
// const previewEmail = document.querySelector('.js-envelope');

// //Hadler input email
// function handleKeyEmail() {
//   previewEmail.href = `mailto:${emailInput.value}`;
// }

// //Listener para email
// emailInput.addEventListener('keyup', handleKeyEmail);

// //<----------------------- *** Phone Input *** ----------------------->
// //Elemento HTML para phone
// const phoneInput = document.querySelector('.js_phone');
// //Elemento HTML para el icono "teléfono" de la card
// const previewPhone = document.querySelector('.js-phoneIcon');

// //Hadler input phone
// function handleKeyPhone() {
//   previewPhone.href = phoneInput.value;
// }

// //Listener para phone
// phoneInput.addEventListener('keyup', handleKeyPhone);

// //<----------------------- *** Linkedin Input *** ----------------------->
// //Elemento HTML para linkedin
// const linkedinInput = document.querySelector('.js_linkedin');
// //Elemento HTML para el icono "Linkedin" de la card
// const previewLinkedin = document.querySelector('.js-linkedinIcon');

// //Hadler input linkedin
// function handleKeyLinkedin() {
//   previewLinkedin.href = linkedinInput.value;
// }

// //Listener para linkedin
// linkedinInput.addEventListener('keyup', handleKeyLinkedin);

// //<----------------------- *** GitHub Input *** ----------------------->
// //Elemento HTML para github
// const githubInput = document.querySelector('.js_github');
// //Elemento HTML para el icono "GitHub" de la card
// const previewGithub = document.querySelector('.js-githubIcon');

// //Hadler input github
// function handleKeyGithub() {
//   previewGithub.href = githubInput.value;
// }

// //Listener para github
// githubInput.addEventListener('keyup', handleKeyGithub);

// //<----------------------------- Usando objetos ----------------------------->
// //<----------------------------------****---------------------------------->
// //<----------------------------- Crear el objeto ----------------------------->
// const cardData = {
//   name: 'Nombre Apellido',
//   job: 'Front-End developer',
//   email: '',
//   phone: '',
//   linkedin: '',
//   github: '',
// };

// //<-------------------- Sustituir los valores de la card por los valores del objeto ---------------------->
// function renderCard(cardData) {
//   const cardSection = document.querySelector('.blueSection__article');

//   cardSection.innerHTML = `<div class="blueSection__article--group">
//   <div class="rectangle"></div>
//   <h2 class="title js_preview_title">${cardData.name}</h2>
//   <h5 class="subtitle js_preview_subtitle">${cardData.job}</h5>
// </div>

// <div class="blueSection__article--photo"></div>

// <ul class="blueSection__article--containerList">
//   <li class="item"><a href="${cardData.phone}" class="js-phoneIcon"><i
//               class="icon fas fa-mobile-alt "></i></a>
//   </li>

//   <li class="item"> <a
//           href="
//           mailto:${cardData.email}?Subject=Interesado%20en%20contactar%20contigo"
//           class="js-envelope"><i class="icon far fa-envelope"></i></a>
//   </li>

//   <li class="item"> <a href="${cardData.linkedin}
//       " class="js-linkedinIcon"><i
//               class="icon fab fa-linkedin-in"></i></a>
//   </li>

//   <li class="item"> <a href="${cardData.github}"
//           class="js-githubIcon"><i
//               class="icon fab fa-github-alt"></i></a></li>
// </ul>`;
// }

// //<----------------------- *** Elementos HTML *** ----------------------->
// //Elemento HTML para name
// const nameInput = document.querySelector('.js_name');
// //Elemento HTML para job
// const jobInput = document.querySelector('.js_job');
// //Elemento HTML para email
// const emailInput = document.querySelector('.js_email');
// //Elemento HTML para phone
// const phoneInput = document.querySelector('.js_phone');
// //Elemento HTML para linkedin
// const linkedinInput = document.querySelector('.js_linkedin');
// //Elemento HTML para github
// const githubInput = document.querySelector('.js_github');

// //<-------------------- Handle para obtener el valor de lo inputs y pintar la preview card ---------------------->
// function handleKeyData(event) {
//   console.log(event.currentTarget.value);
//   const current = event.currentTarget;

//   if (current.classList.contains('js_name')) {
//     cardData.name = current.value;
//   } else if (current.classList.contains('js_job')) {
//     cardData.job = current.value;
//   } else if (current.classList.contains('js_email')) {
//     cardData.email = current.value;
//   }
//   renderCard(cardData);
// }
// //<-------------------- Listeners ---------------------->
// nameInput.addEventListener('keyup', handleKeyData);
// jobInput.addEventListener('keyup', handleKeyData);
// emailInput.addEventListener('keyup', handleKeyData);
// phoneInput.addEventListener('keyup', handleKeyData);
// linkedinInput.addEventListener('keyup', handleKeyData);
// githubInput.addEventListener('keyup', handleKeyData);

//<--------------------- IVAN INPUT --------------------->
//<----------------------------------****---------------------------------->

//Objeto
const Data = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  gitHub: '',
  photo: '',
  palette: 1,
};

//Elemeto HTML
const allInput = document.querySelectorAll('.js-input');
const previewName = document.querySelector('.js_preview_title');
const previewJob = document.querySelector('.js_preview_subtitle');
const previewPhone = document.querySelector('.js-phone');
const previewEmail = document.querySelector('.js-envelope');
const previewLinkedin = document.querySelector('.js-linkedinIcon');
const previewGithub = document.querySelector('.js-githubIcon');

//Funciones
function renderPreview() {
  previewName.innerHTML = Data.name;
  previewJob.innerHTML = Data.job;
  previewPhone.href = `tel:+34${Data.phone}`;
  previewEmail.href = `mailto: ${Data.email}`;
  previewLinkedin.href = `https://www.linkedin.com/in/${Data.linkedin}`;
  previewGithub.href = `https://github.com/${Data.gitHub}`;

  if (Data.name === '') {
    previewName.innerHTML = 'Nombre y Apellido';
  } else {
    previewName.innerHTML = Data.name;
  }
  if (Data.job === '') {
    previewJob.innerHTML = 'Font-end developer';
  } else {
    previewJob.innerHTML = Data.job;
  }
  if (Data.phone === '') {
    previewPhone.innerHTML.href = '';
  } else {
    previewPhone.innerHTML.href = `tel:+34${Data.phone}`;
  }
  if (Data.email === '') {
    previewEmail.innerHTML.href = '';
  } else {
    previewEmail.innerHTML.href = `mailto: ${Data.email}`;
  }
  if (Data.linkedin === '') {
    previewLinkedin.innerHTML.href = '';
  } else {
    previewLinkedin.innerHTML.href = `https://www.${Data.linkedin}`;
  }
  if (Data.gitHub === '') {
    previewGithub.innerHTML.href = '';
  } else {
    previewGithub.innerHTML.href = `https://github.com/${Data.gitHub}`;
  }
}

function handleWriteInput(event) {
  console.log('FUNCIONA!!');
  console.log(event.currentTarget.name);
  console.log(event.currentTarget.value);

  const userInput = event.currentTarget.name; //name, job, phone
  const userValue = event.currentTarget.value; //Lo que está escribiendo la usuaria
  if (userInput === 'name') {
    Data.name = userValue;
  } else if (userInput === 'position') {
    Data.job = userValue;
  } else if (userInput === 'email') {
    Data.email = userValue;
  } else if (userInput === 'telephone') {
    Data.phone = userValue;
  } else if (userInput === 'linkedin') {
    Data.linkedin = userValue;
  } else if (userInput === 'github') {
    Data.gitHub = userValue;
  }

  renderPreview();
}

//Listener
for (const eachInput of allInput) {
  eachInput.addEventListener('keyup', handleWriteInput);
}

//<--------------------- Cambio de colores de la card --------------------->
//<----------------------------------****---------------------------------->

//Elementos HTML
//El rectángulo de la card
const rectangleCard = document.querySelector('.js-rectangleCard');
//El titulo de la card
const titleCard = document.querySelector('.js_preview_title');
//El contenedor de los iconos
//Movil
const containerMobile = document.querySelector('.js-item1');
//Sobre
const containerEnvelope = document.querySelector('.js-item2');
//Linkedin
const containerLinkedin = document.querySelector('.js-item3');
//Github
const containerGithub = document.querySelector('.js-item4');
// Los iconos de la card
//Movil
const iconMobile = document.querySelector('.js-iconMobile');
//Sobre
const iconEnvelope = document.querySelector('.js-iconEnvelope');
//Linkedin
const iconLinkedin = document.querySelector('.js-iconLinkedin');
//Github
const iconGithub = document.querySelector('.js-iconGithub');

//Radiobuttons
//Azul
const radioButtonBlue = document.querySelector('.js-radioBlue');
//Rojo
const radioButtonRed = document.querySelector('.js-radioRed');
//Amarillo
const radioButtonYellow = document.querySelector('.js-radioYellow');
//Rosa
const radioButtonPink = document.querySelector('.js-radioPink');

//<-------------------- Handler ---------------------->
function handleClickSelectColorBlue() {
  //rectangleCard
  rectangleCard.classList.remove('red_rectangle');
  rectangleCard.classList.remove('yellow_rectangle');
  rectangleCard.classList.remove('pink_rectangle');
  rectangleCard.classList.add('rectangle');
  //Titulo
  titleCard.classList.remove('red_title');
  titleCard.classList.remove('yellow_title');
  titleCard.classList.remove('pink_title');
  titleCard.classList.add('title');
  //ContainerMobile
  containerMobile.classList.remove('red_item');
  containerMobile.classList.remove('yellow_item');
  containerMobile.classList.remove('pink_item');
  containerMobile.classList.add('item');
  //containerEnvelope
  containerEnvelope.classList.remove('red_item');
  containerEnvelope.classList.remove('yellow_item');
  containerMobile.classList.remove('pink_item');
  containerEnvelope.classList.add('item');
  //containerLinkedin
  containerLinkedin.classList.remove('red_item');
  containerLinkedin.classList.remove('yellow_item');
  containerMobile.classList.remove('pink_item');
  containerLinkedin.classList.add('item');
  //containerGithub
  containerGithub.classList.remove('red_item');
  containerGithub.classList.remove('yellow_item');
  containerMobile.classList.remove('pink_item');
  containerGithub.classList.add('item');
  //IconMovil
  iconMobile.classList.remove('red_icon');
  iconMobile.classList.remove('yellow_icon');
  iconMobile.classList.remove('pink_icon');
  iconMobile.classList.add('icon');
  //IconEnvelope
  iconEnvelope.classList.remove('red_icon');
  iconEnvelope.classList.remove('yellow_icon');
  iconMobile.classList.remove('pink_icon');
  iconEnvelope.classList.add('icon');
  //IconLinkedin
  iconLinkedin.classList.remove('red_icon');
  iconLinkedin.classList.remove('yellow_icon');
  iconMobile.classList.remove('pink_icon');
  iconLinkedin.classList.add('icon');
  //IconGithub
  iconGithub.classList.remove('red_icon');
  iconGithub.classList.remove('yellow_icon');
  iconMobile.classList.remove('pink_icon');
  iconGithub.classList.add('icon');
}
function handleClickSelectColorRed() {
  //rectangleCard
  rectangleCard.classList.remove('rectangle');
  rectangleCard.classList.remove('yellow_rectangle');
  rectangleCard.classList.remove('pink_rectangle');
  rectangleCard.classList.add('red_rectangle');
  //Titulo
  titleCard.classList.remove('title');
  titleCard.classList.remove('yellow_title');
  titleCard.classList.remove('pink_title');
  titleCard.classList.add('red_title');
  //ContainerMobile
  containerMobile.classList.remove('item');
  containerMobile.classList.remove('yellow_item');
  containerMobile.classList.remove('pink_item');
  containerMobile.classList.add('red_item');
  //containerEnvelope
  containerEnvelope.classList.remove('item');
  containerEnvelope.classList.remove('yellow_item');
  containerMobile.classList.remove('pink_item');
  containerEnvelope.classList.add('red_item');
  //containerLinkedin
  containerLinkedin.classList.remove('item');
  containerLinkedin.classList.remove('yellow_item');
  containerMobile.classList.remove('pink_item');
  containerLinkedin.classList.add('red_item');
  //containerGithub
  containerGithub.classList.remove('item');
  containerGithub.classList.remove('yellow_item');
  containerMobile.classList.remove('pink_item');
  containerGithub.classList.add('red_item');
  //IconMovil
  iconMobile.classList.remove('icon');
  iconMobile.classList.remove('yellow_icon');
  iconMobile.classList.remove('pink_icon');
  iconMobile.classList.add('red_icon');
  //IconEnvelope
  iconEnvelope.classList.remove('icon');
  iconEnvelope.classList.remove('yellow_icon');
  iconMobile.classList.remove('pink_icon');
  iconEnvelope.classList.add('red_icon');
  //IconLinkedin
  iconLinkedin.classList.remove('icon');
  iconLinkedin.classList.remove('yellow_icon');
  iconMobile.classList.remove('pink_icon');
  iconLinkedin.classList.add('red_icon');
  //IconGithub
  iconGithub.classList.remove('icon');
  iconGithub.classList.remove('yellow_icon');
  iconMobile.classList.remove('pink_icon');
  iconGithub.classList.add('red_icon');
}
function handleClickSelectColorYellow() {
  //rectangleCard
  rectangleCard.classList.remove('rectangle');
  rectangleCard.classList.remove('red_rectangle');
  rectangleCard.classList.remove('pink_rectangle');
  rectangleCard.classList.add('yellow_rectangle');
  //Titulo
  titleCard.classList.remove('title');
  titleCard.classList.remove('red_title');
  titleCard.classList.remove('pink_item');
  titleCard.classList.add('yellow_title');
  //ContainerMobile
  containerMobile.classList.remove('item');
  containerMobile.classList.remove('red_item');
  containerGithub.classList.remove('pink_item');
  containerMobile.classList.add('yellow_item');
  //containerEnvelope
  containerEnvelope.classList.remove('item');
  containerEnvelope.classList.remove('red_item');
  containerGithub.classList.remove('pink_item');
  containerEnvelope.classList.add('yellow_item');
  //containerLinkedin
  containerLinkedin.classList.remove('item');
  containerLinkedin.classList.remove('red_item');
  containerGithub.classList.remove('pink_item');
  containerLinkedin.classList.add('yellow_item');
  //containerGithub
  containerGithub.classList.remove('item');
  containerGithub.classList.remove('red_item');
  containerGithub.classList.remove('pink_item');
  containerGithub.classList.add('yellow_item');
  //IconMovil
  iconMobile.classList.remove('icon');
  iconMobile.classList.remove('red_icon');
  iconMobile.classList.remove('pink_icon');
  iconMobile.classList.add('yellow_icon');
  //IconEnvelope
  iconEnvelope.classList.remove('icon');
  iconEnvelope.classList.remove('red_icon');
  iconMobile.classList.remove('pink_icon');
  iconEnvelope.classList.add('yellow_icon');
  //IconLinkedin
  iconLinkedin.classList.remove('icon');
  iconLinkedin.classList.remove('red_icon');
  iconMobile.classList.remove('pink_icon');
  iconLinkedin.classList.add('yellow_icon');
  //IconGithub
  iconGithub.classList.remove('icon');
  iconGithub.classList.remove('red_icon');
  iconMobile.classList.remove('pink_icon');
  iconGithub.classList.add('yellow_icon');
}
function handleClickSelectColorPink() {
  //rectangleCard
  rectangleCard.classList.remove('rectangle');
  rectangleCard.classList.remove('red_rectangle');
  rectangleCard.classList.remove('yellow_rectangle');
  rectangleCard.classList.add('pink_rectangle');
  //Titulo
  titleCard.classList.remove('title');
  titleCard.classList.remove('red_title');
  titleCard.classList.remove('yellow_title');
  titleCard.classList.add('pink_title');
  //ContainerMobile
  containerMobile.classList.remove('item');
  containerMobile.classList.remove('red_item');
  containerMobile.classList.remove('yellow_item');
  containerMobile.classList.add('pink_item');
  //containerEnvelope
  containerEnvelope.classList.remove('item');
  containerEnvelope.classList.remove('red_item');
  containerEnvelope.classList.remove('yellow_item');
  containerEnvelope.classList.add('pink_item');
  //containerLinkedin
  containerLinkedin.classList.remove('item');
  containerLinkedin.classList.remove('red_item');
  containerLinkedin.classList.remove('yellow_item');
  containerLinkedin.classList.add('pink_item');
  //containerGithub
  containerGithub.classList.remove('item');
  containerGithub.classList.remove('yellow_item');
  containerLinkedin.classList.remove('red_item');
  containerGithub.classList.add('pink_item');
  //IconMovil
  iconMobile.classList.remove('icon');
  iconMobile.classList.remove('red_icon');
  iconMobile.classList.remove('yellow_icon');
  iconMobile.classList.add('pink_icon');
  //IconEnvelope
  iconEnvelope.classList.remove('icon');
  iconEnvelope.classList.remove('red_icon');
  iconMobile.classList.remove('yellow_icon');
  iconEnvelope.classList.add('pink_icon');
  //IconLinkedin
  iconLinkedin.classList.remove('icon');
  iconLinkedin.classList.remove('red_icon');
  iconMobile.classList.remove('yellow_icon');
  iconLinkedin.classList.add('pink_icon');
  //IconGithub
  iconGithub.classList.remove('icon');
  iconGithub.classList.remove('red_icon');
  iconMobile.classList.remove('yellow_icon');
  iconGithub.classList.add('pink_icon');
}

//<-------------------- Listeners ---------------------->
radioButtonBlue.addEventListener('click', handleClickSelectColorBlue);
radioButtonRed.addEventListener('click', handleClickSelectColorRed);
radioButtonYellow.addEventListener('click', handleClickSelectColorYellow);
radioButtonPink.addEventListener('click', handleClickSelectColorPink);
