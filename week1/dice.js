//Creating a Random Number Generator for Dice using Math.Random()

console.log("Your throw resulted in:")

//Results always between 0 to 1
// console.log(Math.random())

//Marking the lowest and highest limit for the dice
const min=1;
const max=6;

//Results in Random value ranging from 0 to 6
// console.log(Math.random()*(max-min+1))

//We need values from 1 to 6 so we will add min into it
// console.log(Math.random()*(max-min+1)+1)

//The values should be integer only so using floor
console.log(Math.floor(Math.random()*(max-min+1)+1))