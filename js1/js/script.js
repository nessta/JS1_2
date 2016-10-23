// функция возведения в степень

"use strict"

function pow(x, n) {
 var result = x;

for (var i = 1; i < n; i++) {
  result *= x;
}

return result;
}

var x = prompt('Введите число', '');
var n = prompt('Введите степень', '');

/*alert (pow(x, n) );*/
console.log ('result =', pow (x, n) );
