"use strict";

function changeContent(index, id) {
    var divs = document.querySelectorAll("div");
    var buttons = document.querySelectorAll("button");
    var imgs = document.querySelectorAll("img");
    var paragraphs = document.querySelectorAll("p");

    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.remove("display");
        divs[i].classList.remove("transform")
        buttons[i].classList.remove("active");
        imgs[i].classList.remove("opacity");
        paragraphs[i].classList.remove("opacity");
        paragraphs[i].classList.remove("transform");
    }

    var element = document.getElementById(id);
    element.classList.add("display");
    buttons[index].classList.add("active");

    setTimeout(function () {
        element.classList.add("transform");
        imgs[index].classList.add("opacity");
    }, 100)
    setTimeout(function () {
        paragraphs[index].classList.add("transform");
        paragraphs[index].classList.add("opacity");
    }, 700)
}