// 3 kinds of assignments functions
/*
!!!!
Объявления функций не являются частью
обычной последовательности выполнения программы сверху вниз. Они
концептуально перемещаются в верхнюю часть своей области видимости
и могут использоваться любой частью кода в пределах данной области.
!!!
*/


// привязка к значению при создании

const my_func = function(arg1) {
  return arg1;
}
console.log(my_func(901));

// указание имени функции через объявление
function stas(arg1) {
  return arg1 * 2;
}
console.log(stas(8));
// стрелочные функции с прикольным синтаксисом
const my_func2 = (arg1, arg2) => {
  return arg1 + arg2;
}
console.log(my_func2(100, 4))


//////////////////////////
const minus = (a, b) => {
  if (b === undefined) return -a;
  else return a - b;
}
// if no args loosing arg will undefined value
minus(10);
minus(200, 50);

////////////////////////////

// another one

function power(arg1, exponent=2) {
  let result = 1;
  for (let count=0; count< exponent; count++) {
    result += arg1;
  }
  return result;
}


console.low(pow(4))
