// Can mixed case array sort is  possible

let mixedCase  = ['C','D','E','b','a']

mixedCase.sort()

console.log(mixedCase)   // ['C', 'D', 'E', 'a', 'b']

mixedCase.sort(function(a,b){
    let x = a.toUpperCase()
    let y = b.toLowerCase()

    console.log("Uppercase",x)     // D E A B 

    console.log("Lowercase",y)    // c d e a

    return x == y ? 0 : x > y ? 1 : - 1
})

console.log(mixedCase)   // ['a', 'b', 'E', 'D', 'C']

console.log(mixedCase[0],'with function')   // a with function