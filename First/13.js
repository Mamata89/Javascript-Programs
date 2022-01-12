function compare(b){
    return b == b
}

console.log(compare(null))      // true

console.log(compare(undefined)) // true

console.log(compare(NaN))       // false

console.log(compare(Number.isNaN(NaN)))  // true

console.log(compare([NaN]))       // true