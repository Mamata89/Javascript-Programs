//Does if shift array element to the right

let array = [1,2,3,4,5]

// array.push(6)

// console.log(array) // [1,2,3,4,5,6]

// array.unshift(10)
// console.log(array) //  [10,1,2,3,4,5]

// array.pop()
// console.log(array) // [10,1,2,3,4]


console.log(array.length)   // 5

array.unshift(array.pop())

console.log(array.length)  // 5

console.log(array)        //  [5,1,2,3,4]    