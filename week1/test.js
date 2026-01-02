"use strict"; //for newer versions
console.log("Hello World");
let temporary="1234";

//checking type by typeof or typeof()
console.log(typeof temporary);

//type conversion by converting string into number
temporary=Number(temporary)
console.log(temporary);
console.log(typeof temporary)

//Note that the 
//only string like "123" can be converted to Number 
// "123abc" results in NaN
//"" also results in Nan
//"true/false" can be converted to 1/0