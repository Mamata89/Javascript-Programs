
console.log= function(){}
console.log("hi startup")
console.log("hi", "js")   // output wont be here



console.log("hi startup")
console.log= function(){}
console.log("hi", "js")     //  hi startup


console.log("hi startup")
console.log("hi", "js")  
console.log= function(){}       // hi startup    hi js
   
