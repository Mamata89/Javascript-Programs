//Convert Object to Array

const person={
    name:"mamata",
    age:"30",
    city:"banaglore"
}

console.log(Object.keys(person))        // ['name', 'age', 'city']

console.log(Object.values(person))      //   ['mamata', '30', 'banaglore']

console.log(Object.entries(person))     // [ ['name', 'mamata'], ['age', '30'], ['city', 'banaglore']]
