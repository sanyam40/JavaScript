// ARRAYS IN JS

const arr=[1,2,3,4]
console.log(arr.length)
console.log(arr)
let a=arr.toString() // ARRAY TO STRING
console.log(a)
let c=arr.join(" and ")
console.log(c)
console.log(arr.pop()) // POP - REMOVE FROM LAST AND RETURN LAST ELEMENT
arr.push(8) // PUSH - ADDING ELEMENT AT LAST AND RETURN NEW ARRAY LENGTH
console.log(arr)
let d=arr.shift() // SHIFT - REMOVE THE RETURN THE FIRST ELEMENT
console.log(arr,d)
arr.unshift(22) // UNSHIFT - ADD ELEMENT AT FIRST AND RETURN THE NEW LENGTH
console.log(arr)
delete arr[0]
console.log(arr)