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
const obj={
    name:"waris",
    age:22,
    subject:"javascript",
    gender:"male"
}

const {name,age}=obj;
// console.log(name)
const{subject:sub}=obj;
console.log(sub)


