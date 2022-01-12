// var works in block scope

var str="Javascript"
{
    var str="js startup"
}

console.log(str)



function disp(){
    var name="hiii"
    console.log(name)
}

disp()