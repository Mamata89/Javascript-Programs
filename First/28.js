// break wont work in foe Each

let num=[2,4,5]

num.forEach(item => {
    if(item > 3){
        break
    }
    console.log(item)       // Error: Illegal break statenent

})