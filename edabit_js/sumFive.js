function sumFive(arr) {
  let sum = 0;
  for (let item = 0; item < arr.length; item++) {
    if (arr[item] > 5) {
	  sum+= arr[item];
    }
  }
  // return Math.round(sum * 100) / 100;
  // return arr.reduce((a, b) => b > 5 ? a + b : a, 0);
}

console.log(sumFive());
