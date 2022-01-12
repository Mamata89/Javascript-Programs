//Conert STRING to an ARRAY

let str="Bangalore"

console.log(str.split(''))  // ['B', 'a', 'n', 'g', 'a', 'l', 'o', 'r', 'e']

console.log([...str])

console.log(Array.from(str))

console.log(Object.assign([],str))

