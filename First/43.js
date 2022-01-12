//Can it uppercase the string of first letter

let name = "js startup"

console.log(name.split(' ').map(ele => {
    return ele.charAt(0).toUpperCase()+ ele.slice(1)
}).join(' ')) 

//Js Startup