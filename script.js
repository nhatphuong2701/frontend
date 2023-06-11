"use strict"

const navButton = document.getElementById('classMenu')
const overlay = document.getElementById('overlay')


function openNavMenu() {
    navButton.style.display = 'block'
    overlay.style.display = 'block'
}

function closeNavMenu() {
    navButton.style.display = 'none'
    overlay.style.display = 'none'
}
