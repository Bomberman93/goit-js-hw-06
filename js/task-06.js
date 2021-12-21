"use strict"

const form = document.querySelector("#validation-input");

function search(e) {
    if (+this.getAttribute('data-length') === this.value.length){
       deleteClass("valid", "invalid");
       return; 
    }
    deleteClass("invalid", "valid");
}
function deleteClass(addElement, delElement) {
    form.classList.add(addElement);
    form.classList.remove(delElement);
}

form.addEventListener("blur", search);
