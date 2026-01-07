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

// const min=1;
// const max=6;
// console.log(Math.random())
// console.log(Math.random()*(max-min+1))
// console.log(Math.random()*(max-min+1)+1)
// console.log(Math.floor(Math.random()*(max-min+1)+1))

// =====================================================================
// const arr1=[9,8,7,6,5,4]
// const arr2=[9,8,7,6,5,4]
// console.log(arr1)
// console.log("Slice:"+arr1.slice(0,3))
// console.log(arr1)
// console.log("***********************************")
// console.log(arr2)
// console.log("Splice:"+arr2.splice(0,3))
// console.log(arr2)


// ============================================================================
// Need to practise, Array.of, Array.from, Array.isArray 


//Array.of returns a new array containing the elements that were given as arguments
// const var1=5
// const var2=15
// const var3=25
// const arr=Array.of(var1,var2,var3)
// console.log(arr)

// const arr=Array.from("Waris")
// console.log(arr)

// ===================================================================================
// Objects 

// const jsUser={
//     name:"Waris",
//     email:"waris123@gmail.com",
//     gender:"male",
//     location:"Lucknow",
// }
// // console.log(jsUser)
// console.log(jsUser.email)
// console.log(jsUser["email"])
// //now freeze option will not allow to change the value inside the object earlier also it never did when you're in strict mode
// Object.freeze(jsUser)
// jsUser.email="notwaris123@gmail.com"
// console.log(jsUser.email)


// const obj1={
//     name1:"Waris",
//     age1:23
// }
// const obj2={
//     name2:"Chandan",
//     age:23
// }

// const obj3={...obj1,...obj2}
// // console.log(obj3)
// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))
// console.log(Object.entries(obj3))

// =============================================================================
//Destructuring of Object
// const obj={
//     name:"waris",
//     age:22,
//     subject:"javascript",
//     gender:"male"
// }

// const {name,age}=obj;
// // console.log(name)
// const{subject:sub}=obj;
// console.log(sub)

// ====================================================================
// Functions 

//Basic function
// console.log(add(21,28));
// function add(num1,num2){
//     return num1+num2;
// }

//can't use add2 before declaration because we are basically storing the function into a variable named add2. We can't access any variable before it's declaration
// console.log(add2(28,21));
// const add2=function(num1,num2){
//     return num1+num2;
// }
// console.log(add2(28,21));

//Using Arrow function
// const arrow=(num1,num2)=>{
//     return num1+num2;
// }
// console.log("Using arrow")
// console.log(arrow(21,28));

//returning without return statement
// const fun=(num1,num2)=>(num1+num2);
// console.log(fun(21,28))

//IIFE
// (function(){
//     console.log("Hey this is IFEE")
// })();


// =============================================
// Nullish Coalising Operator ??
// Different from Ternary operator ?

const var1=5??10
const var2=null??10
const var3=undefined??15
const var4=null??undefined??""

console.log(var1)
console.log(var2)
console.log(var3)
console.log(var4)