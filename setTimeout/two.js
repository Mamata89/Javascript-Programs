//clearTimeOut

function greet(name, byeText){
    console.log("heoo good mornung", + name + "  " + byeText)
}

timeOut = setTimeout(greet,1000, "mamata", "take care")

console.log(timeOut)

clearTimeout(timeOut)