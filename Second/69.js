// What does the array values method returns

const array = ['js', 'startup','challaneg']

const iterator = array.values()

console.log(iterator.next()) // {value: 'js', done: false}

console.log(iterator.next().value)  // startup

console.log(iterator.next()) //  {value: 'startup', done: false}

console.log(iterator.next()) // {value: 'challaneg', done: false}

console.log(iterator.next())  // {value: undefined, done: true}