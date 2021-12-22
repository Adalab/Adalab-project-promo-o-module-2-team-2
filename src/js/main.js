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

//Creación de objeto
let userData = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
  palette: 1,
};
//Traer elementos HTML
const allInputs = document.querySelectorAll('.js_input');
const namePreview = document.querySelector('.js_preview_title');
const jobPreview = document.querySelector('.js_preview_subtitle');
const phonePreview = document.querySelector('.js_phone');
const emailPreview = document.querySelector('.js-envelope');
const linkedinPreview = document.querySelector('.js-linkedinIcon');
const githubPreview = document.querySelector('.js-githubIcon');
//function
function renderPreview() {
  if (userData.palette === '') {
    userData.palette = 1;
  } else {
    userData.palette = userData.palette;
  }
  if (userData.name === '') {
    namePreview.innerHTML = 'Nombre Apellidos';
  } else {
    namePreview.innerHTML = userData.name;
  }
  if (userData.job === '') {
    jobPreview.innerHTML = 'Front-End Developer';
  } else {
    jobPreview.innerHTML = userData.job;
  }
  if (userData.photo === '') {
    profileImage.style.backgroundImage = 'url(./assets/images/user_image.png)';
    profilePreview.style.backgroundImage = '';
  } else {
    profileImage.style.backgroundImage = `url(${userData.photo})`;
    profilePreview.style.backgroundImage = `url(${userData.photo})`;
  }
  if (userData.phone === '') {
    phonePreview.innerHTML = '';
  } else {
    phonePreview.innerHTML = `tel:+34${userData.phone}`;
  }
  if (userData.email === '') {
    emailPreview.href = '';
  } else {
    emailPreview.href = `mailto:${userData.email}`;
  }
  if (userData.linkedin === '') {
    linkedinPreview.href = '';
  } else {
    linkedinPreview.href = `https://www.linkedin/in/${userData.name}`;
  }
  if (userData.github === '') {
    githubPreview.href = '';
  } else {
    githubPreview.href = `https://www.github/${userData.name}`;
  }
}
//Handler
function handleWriteInputs(event) {
  const userInput = event.currentTarget.id;
  const userValue = event.currentTarget.value;
  console.log(userInput, userValue);
  if (userInput === 'name') {
    userData.name = userValue;
  } else if (userInput === 'job') {
    userData.job = userValue;
  } else if (userInput === 'phone') {
    userData.phone = userValue;
  } else if (userInput === 'email') {
    userData.email = userValue;
  } else if (userInput === 'linkedin') {
    userData.linkedin = userValue;
  } else if (userInput === 'github') {
    userData.github = userValue;
  }
  renderPreview();
  //añadir objeto de inputs a localStorage
  //pasar contenido del objeto a string
  localStorage.setItem('userData', JSON.stringify(userData));
}
for (const eachInput of allInputs) {
  eachInput.addEventListener('keyup', handleWriteInputs);
}

//componente foto perfil (código Iván)

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  userData.photo = fr.result;
  localStorage.setItem('userData', JSON.stringify(userData));
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);

//Traer btn de html
const shareButtonElement = document.querySelector('.js_btn_share');

//Función
function handleClickShare(event) {
  event.preventDefault();
  console.log(userData);

  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((userData) => {
      console.log(userData);
    });
  //innerHTML y href
}

//Listener crear tarjeta
shareButtonElement.addEventListener('click', handleClickShare);

//Gestión preview paletas
const allRadioBtns = document.querySelectorAll('.checkbox');
const cardIcons = document.querySelectorAll('.js_icon');
const cardRectangle = document.querySelector('.js_rectangle');

function handleClickPalette(event) {
  const selectedRadio = event.currentTarget.id;
  if (selectedRadio === 'palette1') {
    paint1();
  } else if (selectedRadio === 'palette2') {
    paint2();
  } else {
    paint3();
  }
}

function paint1() {
  userData.palette = 1;
  namePreview.classList.add('palette1');
  namePreview.classList.remove('palette2');
  namePreview.classList.remove('palette3');

  cardRectangle.classList.add('palette1');
  cardRectangle.classList.remove('palette2');
  cardRectangle.classList.remove('palette3');

  for (const iconColor of cardIcons) {
    iconColor.classList.add('palette1');
    iconColor.classList.remove('palette2');
    iconColor.classList.remove('palette3');
  }
}

function paint2() {
  userData.palette = 2;
  namePreview.classList.add('palette2');
  namePreview.classList.remove('palette1');
  namePreview.classList.remove('palette3');

  cardRectangle.classList.add('palette2');
  cardRectangle.classList.remove('palette1');
  cardRectangle.classList.remove('palette3');

  for (const iconColor of cardIcons) {
    iconColor.classList.remove('palette1');
    iconColor.classList.add('palette2');
    iconColor.classList.remove('palette3');
  }
}

function paint3() {
  userData.palette = 3;
  namePreview.classList.add('palette3');
  namePreview.classList.remove('palette1');
  namePreview.classList.remove('palette2');

  cardRectangle.classList.add('palette3');
  cardRectangle.classList.remove('palette1');
  cardRectangle.classList.remove('palette2');
  for (const iconColor of cardIcons) {
    iconColor.classList.remove('palette1');
    iconColor.classList.remove('palette2');
    iconColor.classList.add('palette3');
  }
}

for (const eachRadio of allRadioBtns) {
  eachRadio.addEventListener('click', handleClickPalette);
}

function loadPreviousData() {
  //recuperar valores objeto input de string a objeto tras haber hecho stringfy
  const savedUserData = JSON.parse(localStorage.getItem('userData'));
  if (savedUserData !== null) {
    userData = savedUserData;
    renderPreview();
    changeValueInputs();
  }
}
function changeValueInputs() {
  for (const elements of allInputs) {
    const userInput = elements.id;

    if (userInput === 'name') {
      elements.value = userData.name;
    } else if (userInput === 'job') {
      elements.value = userData.job;
    } else if (userInput === 'phone') {
      elements.value = userData.phone;
    } else if (userInput === 'email') {
      elements.value = userData.email;
    } else if (userInput === 'linkedin') {
      elements.value = userData.linkedin;
    } else if (userInput === 'github') {
      elements.value = userData.github;
    }
  }
}
loadPreviousData();
//Función reset object
function resetObject() {
  for (const item of Object.keys(userData)) {
    userData[item] = '';
  }
  userData.palette = 1;
}

//botón reset
const resetBtn = document.querySelector('.js_reset');

function handleResetBtn() {
  localStorage.removeItem('userData');
  resetObject();
  renderPreview();
}

resetBtn.addEventListener('click', handleResetBtn);


https://twitter.com/intent/tweet?hashtags=demo&original_referer=https%3A%2F%2Fdeveloper.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&related=twitterapi%2Ctwitter&text=Hello%20world&url=https%3A%2F%2Fexample.com%2Ffoo&via=twitterdev