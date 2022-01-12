//Onject Destructuring

let product = {
    name:'Phone',
    price:"kidney"
   // tags=['phone' , 'device', 'expensive']
}

const {name,price} = product

console.log(name)   // phone

console.log(price)  // kidney


let products = {
    name:'Phone',
    price:"kidney",
    tags : ['phone' , 'device', 'expensive']
}

const {0:firstTag, 2:secTag} = products.tags

console.log(firstTag)       // phone

console.log(secTag)         // expensive