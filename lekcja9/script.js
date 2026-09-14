"use strict";

let counter = 0
let items = ["Wojownik", "Mag", "Łucznik", "Nekromanta"]

function addPoint() {
    counter += 1
    document.getElementById("counter-display").textContent = counter
}

function resetPoints() {
    counter = 0
    document.getElementById("counter-display").textContent = counter
}

function drawItem(){
    let index = Math.floor(Math.random() * items.length)
    document.getElementById("random-display").textContent = items[index]
}

