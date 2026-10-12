"use strict";

let stickers = ["Lew", "Panda", "Delfin", "Orzeł", "Tygrys", "Żółw"]
let counter = 0
let table = document.getElementById("album")
let button = document.getElementById("draw-btn")
const adjective = [
    "puszysty",
    "zwinny",
    "księżycowy",
    "piorunowy",
    "mglisty",
    "skrzydlaty",
    "szeleszczący",
    "śnieżny",
    "ognisty",
    "miodowy",
    "leśny",
    "gwiezdny",
    "burzowy",
    "puchaty",
    "północny",
    "szmaragdowy",
    "cieniolubny",
    "wodospadowy",
    "mroźny",
    "złotooki",
    "wędrowny",
    "tajemniczy",
    "przebiegły",
    "łagodny",
    "królewski",
    "śnieżnobrody",
    "półdziki",
    "świetlisty"
];


function drawSticker() {
    let index = Math.floor(Math.random() * stickers.length)
    let index2 = Math.floor(Math.random() * adjective.length)
    return stickers[index] + " " + adjective[index2]
}

function addToAlbum() {
    let sticker = drawSticker()
    counter++
    let row = table.insertRow()
    row.insertCell().textContent = counter
    row.insertCell().textContent = sticker
}

button.addEventListener("click", addToAlbum)
