//"use strict"
let details ={
    name:'js'
}

Object.freeze(details)

details['name'] ="JAvascript"
details.name = "JAvascript"

console.log(details.name)  // js   => If we use "use strict throws an error"

details['active'] = "true"

console.log(details.active)     // undefined 