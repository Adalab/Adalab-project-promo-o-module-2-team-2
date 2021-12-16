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
const userData = {
  name: '',
  position: '',
  email: '',
  tel: '',
  linkedin: '',
  github: '',
  photo: '',
  palette: 1
};
//Traer elementos HTML
const allInputs = document.querySelectorAll('.js_input');
const namePreview = document.querySelector('.js_preview_title');
const positionPreview = document.querySelector('.js_preview_subtitle');
const telPreview = document.querySelector('.js-phone');
const emailPreview = document.querySelector('.js-envelope');
const linkedinPreview = document.querySelector('.js-linkedinIcon');
const githubPreview = document.querySelector('.js-githubIcon');
//function
function renderPreview(){
  if(userData.name === ""){
    namePreview.innerHTML = "Nombre Apellidos";
  }else{
    namePreview.innerHTML = userData.name;
  }
  if(userData.position === ""){
    positionPreview.innerHTML = "Front-End Developer";
  }else{
    positionPreview.innerHTML = userData.position;
  }
  if(userData.tel === ""){
    telPreview.innerHTML = "";
  }else{
    telPreview.innerHTML = `mailto:+34${userData.tel}`;
  }
  if(userData.email === ""){
    emailPreview.innerHTML = "";
  }else{
    emailPreview.innerHTML = `mailto:${userData.email}`;
  }
  if(userData.linkedin === ""){
    linkedinPreview.innerHTML = "";
  }else{
    linkedinPreview.innerHTML = `mailto:https://www.linkedin/in/${userData.name}`;
  }if(userData.github === ""){
    githubPreview.innerHTML = "";
  }else{
    githubPreview.innerHTML = `mailto:https://www.github/${userData.name}`;
  }
}
//Handler
function handleWriteInputs(event) {
  const userInput = event.currentTarget.id;
  const userValue = event.currentTarget.value;
  console.log(userInput);
  if(userInput === 'name'){
    userData.name = userValue;
  }else if(userInput === 'position'){
    userData.position = userValue;
  }else if(userInput === 'telephone'){
    userData.tel = userValue;
  }else if(userInput === 'email'){
    userData.email = userValue;
  }else if(userInput === 'linkedin'){
    userData.linkedin = userValue;
  }else if(userInput === 'linkedin'){
    userData.linkedin = userValue;
  }else if(userInput === 'github'){
    userData.github = userValue;
  }
renderPreview();
}
for(const eachInput of allInputs){
  eachInput.addEventListener('keyup',handleWriteInputs);
}
console.log(userData);

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
function getImage(e){
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
}



/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);