

const piValue = 3.14;
let radiusValue = 5.06;
let outputResult = piValue * (radiusValue * radiusValue);
console.log(`the area is ${outputResult}`)


let myAge = 18;
let myFriendAge = 22;
let totalAge= myFriendAge-myAge;
console.log(`Our age difference is ${totalAge} years`);


let tempCelsius = 25;
let tempFahrenheit = (tempCelsius * 9/5) + 32;
console.log(`${tempCelsius}°C is ${tempFahrenheit}°F`);


let rectLength = 30;
let rectWidth = 44;
let rectTotal = (2 * (rectLength + rectWidth));
console.log(`The perimeter is ${rectTotal} units`);


let firstName = prompt("Enter Your Name:");
let yearOfBirth = parseInt(prompt("Enter your birth year:"));
let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;
console.log(`Hello, ${firstName}! You're about ${age} years old.`);

