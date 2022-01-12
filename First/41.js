//compare the self value with data type

const compare = b => b == b

console.log(compare(null))      // true

console.log(compare(undefined))  // true

console.log(compare(NaN))     // false

console.log(compare([NaN]))    // true