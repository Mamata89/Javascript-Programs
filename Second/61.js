//Find value after using array SHIFT and UNSHIFT

let array = [1,2,3,4,5]

array.shift(0)

console.log(array)  // [2,3,4,5]

array.unshift(6)

console.log(array)   // [6,2,3,4,5]

console.log(array[0])   // 6

console.log(array[4])   // 5