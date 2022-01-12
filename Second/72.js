//Did really the reference pass using Array.from()

let array = [1,2,3,4,5]

array[0] = 0

console.log(array)  //[0,2,3,4,5]

let newArray = Array.from(array)

console.log(newArray)  // [0,2,3,4,5]

newArray[0] = 10

console.log(newArray)  // [10,2,3,4,5]

console.log(array)    // [0,2,3,4,5]