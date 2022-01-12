// includes() can really remove duplicate wih forEach()

let array = [2, 4, 6, 2, 9,6, 3, 1,9]

let newArray=[]

array.forEach(ele => {
    if(!newArray.includes(ele)){
        return newArray.push(ele)
    }
})

console.log(newArray)  //  [2, 4, 6, 9, 3, 1]