//Effect of misplaced semicolon after if defined

let num=10

if(num == 11){
    num = 5
}
console.log(num)        // 10

if(num == 10){
    num = 5
}
console.log(num)        //5

if(num == 11);{
    num = 5
}
console.log(num)    // 5