//Generator.prototype.next()

const array=["js", "startup", "challenges"]

const iterates = array.values()

console.log(iterates)

console.log(iterates.next())    // {value: "js", done:false}

console.log(iterates.next())        // {value: "startup", done:false}

console.log(iterates.next().value)  // challenges

console.log(iterates.next().value)  // undefined