//Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.


// flip(1) 0
// flip(0) 1
// Try completing this challenge without using any:
//
// Conditionals
// Ternary operators
// Negations
// Bit operators

let flip = num => Number(Boolean(num-1))

console.log(flip(1));
console.log(flip(0));
