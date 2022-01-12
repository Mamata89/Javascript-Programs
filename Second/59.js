// Does argumennts is a function default parameter


function getLength(){
    return arguments.length
}

console.log(getLength())  // 0

let length = getLength("mamata")

console.log(length)        // 1

let length1 = getLength("mamata","moger")

console.log(length1)       // 2

