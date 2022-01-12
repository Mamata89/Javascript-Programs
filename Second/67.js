let name ="js startup"

let newString = name.split(' ').map(ele => {
    return ele.charAt(0).toUpperCase() + ele.slice(1)
}).join(' ')

console.log(newString)   // Js Startup