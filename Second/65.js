// Object.seal() can restrict value change

let detail = {name:'js dev'}

console.log(detail['name'])  // js dev

console.log(detail.name)     // js dev

Object.seal(detail)

detail['name'] = 'js pro'

console.log(detail['name'])   // js pro

Object.freeze(detail)

detail['name'] = 'js java'

console.log(detail)  // {name: 'js pro}