//setTime Out

function greet(name, byeText){
    console.log("heoo good mornung", + name + "  " + byeText)
}

setTimeout(greet,1000, "mamata", "take care")

setTimeout(greet(), 3000) // cant call functiomn inside setTimeOut  => itz wrong