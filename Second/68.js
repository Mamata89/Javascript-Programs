//What really is the array index value

let array = [10, 15, 20]

array[5] = 25

console.log(array)   // [10, 15, 20, empty × 2, 25]

array.push(30)

console.log(array)  // [10, 15, 20, empty × 2, 25, 30]

array.unshift(35)

console.log(array)  //  [35, 10, 15, 20, empty × 2, 25, 30]

console.log(array.length)  // 8

console.log(array[4])   //undefined

console.log(array[5])   //undefined

console.log(array[6])   // 25