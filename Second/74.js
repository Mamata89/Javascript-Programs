//Settimeout in thw foer looop print values

for(var i= 0 ; i< 5 ; i++){
    setTimeout(() => {
        console.log(i)
    },1000)
}                                   // 5 5 5 5 5

for(let i = 0 ; i < 5 ; i++){
    setTimeout(() => {
        console.log(i)
    },1000)
}                                  // 0 1 2 3 4

for(var i = 0; i < 5 ; i++){
    setInterval(() => {
        console.log(i)
    },1000)
}

for(let i = 0; i < 3 ; i++){
    setInterval(() => {
        console.log(i)
    },1000)
}