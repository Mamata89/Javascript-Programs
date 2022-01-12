// copy object with JSON stringify & parse method

const detail = {name:'mamata'}
console.log(detail)  // {name: 'mamata'}


const obj = JSON.parse(JSON.stringify(detail))

console.log(obj)  // {name: 'mamata'}

obj['name'] = "moger"

console.log(obj)      //  // {name: 'moger'}


console.log(detail)   // {name: 'mamata}



const obj1 =JSON.stringify(detail)

console.log(obj1)           //{"name":"mamata"}
console.log(typeof(obj1))   // string

