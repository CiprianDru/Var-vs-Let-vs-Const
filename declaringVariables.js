

//var - redefine/update

var width = 100;
console.log(width); // 100
width = 200;
console.log(width); // 200


//var - function scoped

function setWidth() {
  var width = 100;
  console.log(width);
}
setWidth();
//console.log(width); //error, width is not defined


//var - global scoped

var width;
function setWidth() {
  width = 100;
  console.log(width);
}
setWidth();
console.log(width);

//var - tricky situation

var age = 100;
if(age > 12) {
  var dogYears = age * 7;
  console.log(`You are ${dogYears} dog years old!`);
}
//console.log(dogYears); error because it's scoped only to the above block

//let - variable

const key = 'abc123';
let points = 50;
let winner = false;

points = 60;


//const - variable

const person = {
  name: '',
  age: 28
}

person.age = 29
