"use strict";

let avatar = document.getElementById("avatar")
let heroName = document.getElementById("name")

let description = document.getElementById("description")
let toggleBtn = document.getElementById("toggle-btn")


toggleBtn.addEventListener('click', function () {
    let isHero = document.body.classList.contains("hero")

    if (isHero) {
        heroName.textContent = "Shadow Villain"
        description.textContent = "Tryb: Villain"
        avatar.src = "https://api.dicebear.com/9.x/adventurer/svg?seed=RADEK"
        document.body.classList.remove("hero")
        document.body.classList.add("villain")
    }else{
        heroName.textContent = "Felix Hero"
        description.textContent = "Tryb: Hero"
        avatar.src = "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix"
        document.body.classList.remove("villain")
        document.body.classList.add("hero")
    }

})


