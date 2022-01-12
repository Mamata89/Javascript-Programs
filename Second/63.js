//Find the sum of object and variable value

let num= 5

let obj={
    num:10,
    value : ++num
}

let total = obj.value + obj.num + num
console.log(obj.value)   // 6

console.log(obj.num)     // 10

console.log(num)        // 6

console.log(total)      // 22