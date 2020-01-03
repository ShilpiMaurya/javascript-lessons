//Hoisting

//Functions and Variables are hoisted in js

//Function Declaration
ageCalculator(1995);
function ageCalculator(year) {
  console.log(2020 - year);
}

//Function Expression
//retirement(1995);
var retirement = function(year) {
  console.log(65 - (2020 - year));
};
retirement(1995);

//Variables
console.log(myAge + " " + "is my current age");
var myAge = 25;
console.log(myAge + " " + "is my current age");

function foo() {
  console.log(myAge);
  var myAge = 65;
  console.log(myAge);
}
foo();
console.log(myAge);

//Scoping

var a = "Solid";
first();
function first() {
  var b = "liquid";
  second();
  function second() {
    var c = "gas";
    console.log("Three states of water are: " + a + "," + b + "," + c);
    third();
  }
}
function third() {
  var d = "matter";
  console.log(a + " " + d);
}

//The "this" Keyword

//console.log(this);

ageCalculator(1995);
function ageCalculator(year) {
  console.log(2020 - year);
  console.log(this);
}
var offilia = {
  name: "Offilia Geller",
  yearOfBirth: 1995,
  calculateAge: function() {
    console.log(this, "this");
    console.log(2020 - this.yearOfBirth);
    // function innerFunction() {
    //   console.log(this);
    // }
    // innerFunction();
  }
};
offilia.calculateAge();

//Method borrowing

var mike = {
  name: "Mike Tribbiyani",
  yearOfBirth: 1984
};
mike.calculateAge = offilia.calculateAge;
mike.calculateAge();
