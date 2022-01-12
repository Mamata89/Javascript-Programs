// Find value after using array shift method

let array = [1,2,3,4,5]

console.log(array.shift(0))  // 1

console.log(array)          // [2,3,4,5]

console.log(array.unshift(6))  // 5

console.log(array)          // [6,2,3,4,5]

console.log(array[0])       // 6

console.log(array[4])       // 5