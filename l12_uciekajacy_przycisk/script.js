"use strict"

const btn = document.getElementById('run-btn')
const container = document.getElementById('game-container')
const scoreDisplay = document.getElementById('score')

let clicks = 0
const winAt = 3

function moveButtonRandom() {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;

    const x = Math.random() * (containerWidth - btnWidth);
    const y = Math.random() * (containerHeight - btnHeight);

    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

btn.addEventListener("mouseover", moveButtonRandom)

btn.addEventListener('click', function() {
    clicks ++
    scoreDisplay.textContent = "Kliknięcia: " + clicks
    if (clicks >= winAt) {
        btn.removeEventListener('mouseover', moveButtonRandom)
        btn.textContent = "Brawo!"
    }
})