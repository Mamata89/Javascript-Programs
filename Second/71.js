// Is console.log() function really override

console.log("hi", "js")

console.log = function(){
    console.log("hi startup")
}

// hi js