'use strict';
let tempInEl = document.getElementById('Temp');
const SubmittEl = document.getElementById('Submitt');
const celciusEl = document.getElementById('Cbutton');
const fahrenheitEl = document.getElementById('Fbutton');
const resultEl = document.getElementById('result');
const resetEl = document.querySelector('.reset');

let temp;

function celciusFunction(temp1) {
  return (temp1 - 32) * (9 / 5);
}
function fahrenheitfunction(temp1) {
  return (temp1 * 9) / 5 + 32;
}
console.log(fahrenheitfunction(42));

SubmittEl.addEventListener('click', function () {
  console.log('clicked');
  if (celciusEl.checked) {
    let tempValue = tempInEl.value;
    tempValue = Number(tempValue);
    tempValue = celciusFunction(tempValue);
    resultEl.innerHTML = tempValue + '℃';
  } else if (fahrenheitEl.checked) {
    let tempValue = tempInEl.value;
    tempValue = Number(tempValue);
    tempValue = fahrenheitfunction(tempValue);
    resultEl.innerHTML = tempValue + '°F';
  } else {
    resultEl.innerHTML = 'Select A unit';
  }
});

resetEl.addEventListener('click', function () {
  resultEl.innerHTML = '';
  document.getElementById('Temp').value = '';
});
