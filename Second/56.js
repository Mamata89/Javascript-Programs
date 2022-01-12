// what does the async array map function return

const numbers = [1, 3, 5]

const addOne =async(num) => num + 1

const numberPlusOne = numbers.map(addOne)

console.log(numberPlusOne)          // [Promise{2}, Promise{4}, Promise{6}]