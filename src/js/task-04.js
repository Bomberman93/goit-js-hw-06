"use strict"

// const counterValue = 0;
// function decrement(){
// 	counterValue +=1;
//   document.querySelector('#value').innerHTML = counterValue;
// }
// function increment(){
// 	counterValue -=1;
//   document.querySelector('#value').innerHTML = counterValue;
// }

const wrap_button = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector('#value'),
    wrapper: document.querySelector('#counter '),
  };
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
  
    wrap_button.span.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    wrap_button.span.textContent = counterValue;
  };
  wrap_button.sub.addEventListener('click', increment);
  wrap_button.add.addEventListener('click', decrement);