// Does nested array refrence removed by spread syntax

let array = [1,[2,3]]

let newArray = [...array]

console.log(newArray)

newArray[0] = 10

newArray[1][0] = 20


console.log(newArray)

console.log(array)