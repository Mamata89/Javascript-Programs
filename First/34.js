//does fasle comparee with false return false

let x = false

let y= new Boolean(false)

console.log(x == y)     // true

console.log(x === y)    // false

console.log(typeof(x))  // boolean

console.log(typeof(y))  // object   (create an object)