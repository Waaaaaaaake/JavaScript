function seriesResistance(arr) {
  let value = arr.reduce((a, b) => a + b)
  return `${value} ` + (Number(value) > 1 ? 'ohms' : 'ohm')
}


// let c = [1,2,4,5].reduce((a, b) => b + a, 0);
// console.log(c);
console.log(seriesResistance([1, 5, 6, 3]));
 // "15 ohms"

seriesResistance([16, 3.5, 6])
 // "25.5 ohms"

console.log(seriesResistance([0.5, 0.5]));
// "1.0 ohm"
