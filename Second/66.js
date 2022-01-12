// Can it uppercase the string first letter

let name= "js startup"

let newString = name.split()

console.log(newString)              // ['js startup']

let newString1 = name.split('')

console.log(newString1)             //['j','s','s','',....'u','p']


let newString2 = name.split(',')

console.log(newString2)             //['js startup]['js startup]



let newString3 = name.split(' ')    // ['js','startup']

console.log(newString3)

let newString4 = name.split(' , ')  // ['js startup']

console.log(newString4)


console.log(newString4.join(' '))   // js startup


console.log(newString4.join(','))   // js startup
