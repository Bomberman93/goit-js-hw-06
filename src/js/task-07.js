"use strict"

const firstInput = document.querySelector("#font-size-control");
const firstSpan = document.querySelector("#text");

function onScrollInput () {
    firstSpan.style.fontSize = firstInput.value + "px";
};
firstSpan.style.fontSize = firstInput.value + "px";
firstInput.addEventListener("input", onScrollInput);
