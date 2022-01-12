// filter array method based on the elemet size

const array = ['js','startup','like']


console.log(array.length)   // 3
const filteredArray = array.filter(ele => {
    return ele.size > 3
})

console.log(filteredArray.length)  // 0