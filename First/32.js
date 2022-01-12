//Reverse an array with the same position

const num = ['js', 'startup']

const reverse = num.map(ele => {
    return ele.split('').reverse().join('')
})

console.log(reverse)

console.log(reverse[0])

console.log(reverse[1])