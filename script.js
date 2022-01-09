const inputFahrenheit = document.querySelector('#inputFahrenheit');
const inputСentigrade = document.querySelector('#inputСentigrade');

const button = document.querySelector('#button');

// округление до сотых
var rounded = function (number) {
  return +number.toFixed(2);
}

button.addEventListener('click', function () {
  // вищитуем целисии
  if (inputFahrenheit.value) {
    centigrade = (inputFahrenheit.value - 32) * 5 / 9;
    inputСentigrade.value = rounded(centigrade);
  }
});

// console.log('ok');