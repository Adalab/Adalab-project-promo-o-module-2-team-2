"use strict";const collapsableTitle1=document.querySelector(".js_collapsable_title_design"),collapsableTitle2=document.querySelector(".js_collapsable_title_fill"),collapsableTitle3=document.querySelector(".js_collapsable_title_share");function handlerClickTitle(e){const t=e.currentTarget;if(!e.currentTarget.parentNode.classList.contains("collapsed"))return t.parentNode.classList.toggle("collapsed"),void t.querySelector(".js-arrow").classList.toggle("rotate");const a=document.querySelectorAll(".js_title_list");for(let e=0;e<a.length;e++)a[e].parentNode.classList.add("collapsed"),a[e].querySelector(".js-arrow").classList.remove("rotate");t.parentNode.classList.toggle("collapsed"),t.querySelector(".js-arrow").classList.toggle("rotate")}collapsableTitle1.addEventListener("click",handlerClickTitle),collapsableTitle2.addEventListener("click",handlerClickTitle),collapsableTitle3.addEventListener("click",handlerClickTitle);let userData={name:"",job:"",email:"",phone:"",linkedin:"",github:"",photo:"",palette:1};const allInputs=document.querySelectorAll(".js_input"),namePreview=document.querySelector(".js_preview_title"),jobPreview=document.querySelector(".js_preview_subtitle"),phonePreview=document.querySelector(".js-phoneIcon"),emailPreview=document.querySelector(".js-envelope"),linkedinPreview=document.querySelector(".js-linkedinIcon"),githubPreview=document.querySelector(".js-githubIcon");function renderPreview(){""===userData.palette?userData.palette=1:(userData.palette=userData.palette,1===userData.palette?Array.from(allRadioBtns).find(e=>"palette1"===e.value).click():2===userData.palette?Array.from(allRadioBtns).find(e=>"palette2"===e.value).click():3===userData.palette&&Array.from(allRadioBtns).find(e=>"palette3"===e.value).click()),""===userData.name?namePreview.innerHTML="Nombre Apellidos":namePreview.innerHTML=userData.name,""===userData.job?jobPreview.innerHTML="Front-End Developer":jobPreview.innerHTML=userData.job,""===userData.photo?(profileImage.style.backgroundImage="url(./assets/images/user_image.png)",profilePreview.style.backgroundImage=""):(profileImage.style.backgroundImage=`url(${userData.photo})`,profilePreview.style.backgroundImage=`url(${userData.photo})`),""===userData.phone?phonePreview.href="":phonePreview.href="tel:+34"+userData.phone,""===userData.email?emailPreview.href="":emailPreview.href="mailto:"+userData.email,""===userData.linkedin?linkedinPreview.href="":linkedinPreview.href=`https://www.linkedin.com/in/${userData.linkedin}/`,""===userData.github?githubPreview.href="":githubPreview.href="https://github.com/"+userData.github}function handleWriteInputs(e){const t=e.currentTarget.id,a=e.currentTarget.value;console.log(t,a),"name"===t?userData.name=a:"job"===t?userData.job=a:"phone"===t?userData.phone=a:"email"===t?userData.email=a:"linkedin"===t?userData.linkedin=a:"github"===t&&(userData.github=a),renderPreview(),localStorage.setItem("userData",JSON.stringify(userData))}for(const e of allInputs)e.addEventListener("keyup",handleWriteInputs);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,userData.photo=fr.result,localStorage.setItem("userData",JSON.stringify(userData))}fileField.addEventListener("change",getImage);const shareButtonElement=document.querySelector(".js_btn_share");function handleClickShare(e){e.preventDefault(),console.log(userData),fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",body:JSON.stringify(userData),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e)})}shareButtonElement.addEventListener("click",handleClickShare);const allRadioBtns=document.querySelectorAll(".checkbox"),cardIcons=document.querySelectorAll(".js_icon"),cardRectangle=document.querySelector(".js_rectangle");function handleClickPalette(e){const t=e.currentTarget.id;"palette1"===t?paint1():"palette2"===t?paint2():paint3()}function paint1(){userData.palette=1,localStorage.setItem("userData",JSON.stringify(userData)),namePreview.classList.add("palette1"),namePreview.classList.remove("palette2"),namePreview.classList.remove("palette3"),cardRectangle.classList.add("palette1"),cardRectangle.classList.remove("palette2"),cardRectangle.classList.remove("palette3");for(const e of cardIcons)e.classList.add("palette1"),e.classList.remove("palette2"),e.classList.remove("palette3")}function paint2(){userData.palette=2,localStorage.setItem("userData",JSON.stringify(userData)),namePreview.classList.add("palette2"),namePreview.classList.remove("palette1"),namePreview.classList.remove("palette3"),cardRectangle.classList.add("palette2"),cardRectangle.classList.remove("palette1"),cardRectangle.classList.remove("palette3");for(const e of cardIcons)e.classList.remove("palette1"),e.classList.add("palette2"),e.classList.remove("palette3")}function paint3(){userData.palette=3,localStorage.setItem("userData",JSON.stringify(userData)),namePreview.classList.add("palette3"),namePreview.classList.remove("palette1"),namePreview.classList.remove("palette2"),cardRectangle.classList.add("palette3"),cardRectangle.classList.remove("palette1"),cardRectangle.classList.remove("palette2");for(const e of cardIcons)e.classList.remove("palette1"),e.classList.remove("palette2"),e.classList.add("palette3")}for(const e of allRadioBtns)e.addEventListener("click",handleClickPalette);function loadPreviousData(){const e=JSON.parse(localStorage.getItem("userData"));null!==e&&(userData=e,renderPreview(),changeValueInputs())}function changeValueInputs(){for(const e of allInputs){const t=e.id;"name"===t?e.value=userData.name:"job"===t?e.value=userData.job:"phone"===t?e.value=userData.phone:"email"===t?e.value=userData.email:"linkedin"===t?e.value=userData.linkedin:"github"===t&&(e.value=userData.github)}}function resetObject(){for(const e of Object.keys(userData))userData[e]="";userData.palette=1}loadPreviousData();const resetBtn=document.querySelector(".js_reset");function handleResetBtn(){localStorage.removeItem("userData"),resetObject(),renderPreview()}resetBtn.addEventListener("click",handleResetBtn);