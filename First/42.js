//Can in operator checks values or index of an array


let myArray = ["js","startup","like"]

for(let val of myArray){
    console.log(val) // js, startup, like
}

for(let val in myArray){
    console.log(val)            // 0 1 2
}

// myArray[1];
console.log('1' in myArray)    // true

console.log('10' in myArray)   // false