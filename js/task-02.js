"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulNavEl = document.querySelector("#ingredients");


const food = ingredients.map(ingredient => {
  let items = document.createElement("li");
  items.classList.add = ("item");
  items.textContent = ingredient;
  return items;
})
ulNavEl.append(...food);
console.log(ulNavEl);





