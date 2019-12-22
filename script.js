//J.S. Lesson 1

// console.log("hello world");
// var title = "Welcome to my page";
// alert(title);
// var name = prompt("what is your name");
// var age = prompt("what is your age");
// console.log(name + " is " + age + " years old");
// var identity = "name";
// console.log(typeof identity);

//coding challenge 1
var heightMark, heightPaul, weightMark, weightPaul, bmiMark, bmiPaul;
heightMark = 1.65;
heightPaul = 1.75;
weightMark = 75;
weightPaul = 66;
bmiMark = weightMark / (heightMark * 2);
bmiPaul = weightPaul / (weightPaul * 2);
var isMarkBMIGreaterThanPaulBMI = bmiMark > bmiPaul;
console.log(
  "is Mark's bmi greater than John's:" + " ",
  isMarkBMIGreaterThanPaulBMI
);

//If else statements (Making decision with the code)
var firstName = "Lenorld";
var isLactoseIntolerant = true;
if (isLactoseIntolerant) {
  console.log(firstName + " " + "can't have cheese cake");
} else {
  console.log(firstName + " " + "can have cheese cake ");
}

//Boolean Logic
var name = "Sheldon";
var age = 30;
if (age < 13) {
  console.log(name + " is a young boy");
} else if (age >= 13 && age < 20) {
  console.log(name + " is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(name + " is a young man");
} else {
  console.log(name + " is a man");
}

//Ternary Operator
var name = "Penny";
var age = 22;
var drink = age >= 18 ? "beer,vodka,whisky etc" : "juice,soda,lemonde";
console.log(name + " " + "drinks" + " " + drink);

//Truthy and falsy values
//Falsey values: undefined, null, "", 0, nan(not a number)
//truthy values: non falsey values
var height;
height = 10;
if (height) {
  console.log("variable is defined");
} else {
  console.log("variable is not defined");
}

//Equality operator
// == does the type coersion
// === strict equality operator

//Coding challenge 2
var john1, john2, john3, mike1, mike2, mike3, mary1, mary2, mary3;
john1 = 89;
john2 = 120;
john3 = 103;
mike1 = 116;
mike2 = 94;
mike3 = 123;
mary1 = 97;
mary2 = 134;
mary3 = 105;
johnTeamAverage = (john1 + john2 + john3) / 3;
mikeTeamAverage = (mike1 + mike2 + mike3) / 3;
maryTeamAverage = (mary1 + mary2 + mary3) / 3;
console.log(johnTeamAverage);
console.log(mikeTeamAverage);
console.log(maryTeamAverage);
if (johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage) {
  console.log("john's team win with the score of " + johnTeamAverage);
} else if (
  maryTeamAverage > johnTeamAverage &&
  maryTeamAverage > mikeTeamAverage
) {
  console.log("mary's team win with the score of " + maryTeamAverage);
} else if (
  mikeTeamAverage > johnTeamAverage &&
  mikeTeamAverage > maryTeamAverage
) {
  console.log("mike's team win with the average of " + mikeTeamAverage);
} else {
  console.log("there is a draw");
}

//functions
function calculateAge(birthyear) {
  return 2019 - birthyear;
}
var christyAge = calculateAge(1995);
console.log(christyAge);
function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 60 - age;
  if (retirement > 0) {
    console.log(name + " " + "retires in" + " " + retirement + " " + "years");
  } else {
    console.log(name + " " + "is already retired");
  }
}
yearsUntilRetirement("shilpi", 1995);

//arrays
var names = ["shilpi", "christy", "suzen", "rachel"];
var years = new Array(1995, 1985, 1999, 1990);
console.log(names.length);
console.log(years);
names[names.length] = "monica";
console.log(names);
//different data type
var christy = ["christy", 1995, "designer", "web-developer"];

//add element to the last
christy.push("salmon pink");

//add element to first
christy.unshift("Mr.");
console.log(christy);

//removes element from last
christy.pop();
console.log(christy);

//removes element from first
christy.shift();
console.log(christy);

//detemines position of a element
console.log(christy.indexOf("christy"));
console.log(christy.indexOf("shilpi")); //this means this element is not present in array

var isDesigner =
  christy.indexOf("designer") === -1
    ? "christy is not designer"
    : "christy is designer";
console.log(isDesigner);

//coding challenge 3
function tipCalculator(bill) {
  if (bill < 50) {
    return (20 / 100) * bill;
  } else if (bill > 50 && bill < 200) {
    return (15 / 100) * bill;
  } else {
    return (10 / 100) * bill;
  }
}
var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(finalValues);
