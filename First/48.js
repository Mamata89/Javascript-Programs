//find out the size of a Javascript MAP OBJET

let maps = new Map()

maps.set('Js')
maps.set('startup')
maps.set('Js')

console.log(maps.size)  // 2

maps.set('Js')
maps.set('startup')
maps.set('JS')

console.log(maps.size)   // 3