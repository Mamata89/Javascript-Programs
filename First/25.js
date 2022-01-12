const set = new Set()

const student = {name:'Ajay'}

console.log(student)   // {name: 'Ajay'}

set.add(student)

console.log(student)   // {name: 'Ajay'}

set.add(student)

console.log(set.size)   // 1