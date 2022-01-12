let details = {name: 'name'}

let keys = Object.keys(details)


console.log(keys)           // ['name']
console.log(typeof(keys))  // object

let values = Object.values(details)

console.log(values)          // ['name']
console.log(typeof(values))  // object

console.log(keys == values)  // false