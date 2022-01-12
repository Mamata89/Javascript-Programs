// filter array method based on element size

const array = ["js", "startup", "like"]

console.log(array.length)   // 3

const filterArray = array.filter(ele => {
    return ele.size > 3
})

console.log(filterArray.length)  // 0