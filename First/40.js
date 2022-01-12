// Does arguments is a default function parameter

function getLength(){
    return arguments.length
}

console.log(getLength("apple","orange","grapes","watermelon"))  // 4

console.log(getLength("mamata","moger"))    //2