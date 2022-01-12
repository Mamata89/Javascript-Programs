const numbers = [1,3,5]

const addOne = Array.from(numbers , ele => ele + 1)

console.log(addOne)     // [2,4,6]

const addTwo = async(num) => num + 1

const numOne = numbers.map(addTwo)

console.log(numOne)     // [Promise (2), Promise (4), Promise (6)]
 
