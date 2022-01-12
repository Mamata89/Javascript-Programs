//Without return keyword returns undefned

function sum(n1, n2){
    n1 + n2
}

console.log(sum(2,3))  // undefined


function add(n1, n2){
   return n1 + n2
}

console.log(add(2,3))   // 5