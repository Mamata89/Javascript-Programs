//access JSON tsring is possible

let detail = {name:'mamata', last:'moger'}

console.log(detail)  // {name: 'mamata', last: 'moger'}

console.log(detail.name)  // mamata

console.log(detail['last']) // moger

let jsonString = JSON.stringify(detail)

console.log(jsonString.name) // undefined