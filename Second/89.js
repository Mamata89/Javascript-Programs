//can string split method will be limited

let name ="Hi I am startup"

let array = name.split(' ')

console.log(array)    // ['Hi', 'I', 'am', 'startup']

// let array1 = name.split(' ',0) // []

//let array1 = name.split(' ',1)    //  ['Hi']

let array1 = name.split(' ',2)

console.log(array1)   //  ['Hi', 'I']

console.log(array1[3])  // undefined

console.log(array1[0])  //  ['Hi']

console.log(array1[1])  // I 

console.log(array1[2])  // undefined 