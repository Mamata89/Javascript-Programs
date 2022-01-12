// what value should return when adding multiple arrays


let arr = []

let str = "js"

let result = arr + str + str.split()

console.log(result) // jsjs

let result2 = arr + str + str.split('')

console.log(result2)  // jsj,s

let result1 = arr + arr + str.split('')

console.log(result1)    // j,s
