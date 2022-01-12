//for loop iterates array in two ways

let array = [1,2,4]

for(let ele of array){
    console.log(ele)            // array elemenst => 1,2,4
}

for(let ele in array){
    console.log(ele)            // index element => 0,1,2
}
