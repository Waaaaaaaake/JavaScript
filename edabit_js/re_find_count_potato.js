function potatoes(str) {
  return str.match(/potato/g).length
}
console.log(potatoes("potato"));

console.log(potatoes("potatopotato"));

console.log(potatoes("potatoapple"));
