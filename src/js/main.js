'use strict';

//traer HTML

const collapsableDesignElement = document.querySelector ('.js-collapsable-title');
const collapsableDesignContent = document.querySelector('.js-design-content');
const collapsableArrow = document.querySelector('.js-arrow');

//crear handler
function handleClickHeader () {
    if (collapsableDesignContent.classList.contains('collapsed')) {
        collapsableDesignContent.classList.toggle('collapsed');
        collapsableArrow.classList.toggle('rotate');
    }
    else {
        collapsableDesignContent.classList.toggle('collapsed');
        collapsableArrow.classList.toggle('rotate');
    }
}

//crear listener

collapsableDesignElement.addEventListener('click', handleClickHeader);

