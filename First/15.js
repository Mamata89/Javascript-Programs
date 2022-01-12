 //Array.from

 let array=[1,3,5]

 let newArray = Array.from(array, ele => ele * 3)

 array[1] = 6

 console.log(newArray)      // [3, 9, 15]

 console.log(newArray[1])   // 9