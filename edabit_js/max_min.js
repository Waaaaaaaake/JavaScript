let arr = [1,200,4]
let max = arr[0];
let min = arr[0];
for (let item of arr) {
  if (item > max) {
    max = item;
  }
  if (item < min) {
    min = item;
  }
}
console.log(max);
console.log(min);
