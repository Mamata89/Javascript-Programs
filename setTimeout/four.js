//clearInterval
function greet(name,byeText){
    console.log("hello" + name + " " + byeText)
}

clear = setInterval(greet,1000,"mamata","take care" )

console.log(clearInterval(clear))