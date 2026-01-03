"use strict"; //for newer versions
// console.log("Hello World");
// let temporary="1234";

//checking type by typeof or typeof()
// console.log(typeof temporary);

//type conversion by converting string into number
// temporary=Number(temporary)
// console.log(temporary);
// console.log(typeof temporary)

//Note that the 
//only string like "123" can be converted to Number 
// "123abc" results in NaN
//"" also results in Nan
//"true/false" can be converted to 1/0

//== and === works differently 

// ====================================================
//Primitive uses stack whereas Non-Primitive uses heaps
// let userOne={
//     name:"Waris",
//     email:"waris123@gmail.com"
// }
// console.log("User One "+userOne.email);
// console.log("Copying userOne to userTwo")
// let userTwo=userOne;
// console.log("Printing userTwo email")
// console.log("User Two "+userTwo.email)
// console.log("Changing email of userTwo")
// userTwo.email="chandan123@gmail.com"
// console.log("Printing email of userOne")
// console.log("User One "+userOne.email);


// Trying the Math.random

const min=1;
const max=6;
// console.log(Math.random())
// console.log(Math.random()*(max-min+1))
// console.log(Math.random()*(max-min+1)+1)
console.log(Math.floor(Math.random()*(max-min+1)+1))
