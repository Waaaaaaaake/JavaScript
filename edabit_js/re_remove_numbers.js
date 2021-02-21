let removeNumbers = (str) => str.match(/\D/g).join('')

function removeNumbers(str){
  return str.split('').filter(c => parseInt(c)).join('');
}
// function removeNumbers(str) {
//   console.log(['a', 'a', '2', '1'].filter(c => c != '1'));
// }
console.log(removeNumbers("mubashir1"));
// "mubashir"

console.log(removeNumbers("12ma23tt"))
// "matt"

removeNumbers("e1d2a3b4i5t6")
console.log(removeNumbers('pakistan00'));
// "edabit"
