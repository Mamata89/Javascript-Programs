//Object.assign()

let objOne = {first : 'Js'}

let objTwo = {sec : 'startup'}

let objThree = {third  : 'Komala'}

let newObj = Object.assign(objOne, objTwo, objThree)

console.log(newObj)     // {first: 'Js', sec: 'startup', third: 'Komala'}

console.log(typeof(newObj)) // object

newObj['first'] ="nodejs"

newObj['sec'] = "recatjs"

// newObj['third'] = "hiii"

newObj.third = "hiiii"

console.log(objOne['first'])   // nodejs

console.log(objOne['sec'])    // ecatjs

console.log(objOne['third'])  // hiii
