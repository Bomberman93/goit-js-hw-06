"use strict"


let input = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

function onInput () {
    if (input.value !== '') {
        nameOutput.textContent = input.value;
        return;
    }
    nameOutput.textContent = 'Anonymous';
};
input.addEventListener("input", onInput);

