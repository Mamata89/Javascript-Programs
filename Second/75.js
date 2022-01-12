// array filter method can filter the add value

let array = [1,2,3,4,5]

let newArray = array.filter(ele => ele % 2)

console.log(newArray)   // [1,3,5]

let newArray1= array.filter(ele => ele % 2 == 0)

console.log(newArray1)   // [2,4 ]