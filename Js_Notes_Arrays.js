// ARRAYS IN JS

const arr=[1,2,3,4]
const arr2=[5,6,7,8]

console.log(arr.length) // RETURN THE ARRAY LENGTH
console.log(arr)
let a=arr.toString() // ARRAY TO STRING
console.log(a)
let c=arr.join(" and ") // ADDING B/W ELEMENT OF ARRAY
console.log(c)
console.log(arr.pop()) // POP - REMOVE FROM LAST AND RETURN LAST ELEMENT
arr.push(8) // PUSH - ADDING ELEMENT AT LAST AND RETURN NEW ARRAY LENGTH
console.log(arr)
let d=arr.shift() // SHIFT - REMOVE THE RETURN THE FIRST ELEMENT
console.log(arr,d)
arr.unshift(22) // UNSHIFT - ADD ELEMENT AT FIRST AND RETURN THE NEW LENGTH
console.log(arr)
delete arr[0] // DELETE THE ELEMENT AT SPECIFIC POS.
console.log(arr)

let array=arr.concat(arr2) // DOESN'T CHANGE EXISITNG ARRAY

const  p=[9,8,7,1,11] 
p.sort() // CHANGE THE ORIGINAL ARRAY -- ALPABATECIALLY
console.log(p)
p.reverse() // REVERSE THE ORIGINAL ARRAY
console.log(p)

p.splice(2,3,99,989,999) // TO REMOVE AND ADD ELEMENTS & IT RETURNS THE DELETED ELEMENTS
console.log(p)

console.log(p.slice(1)) // TO EXTRACT VALUES

// Array from : used to create an array from any other object
let name="sanyam"
let ll=Array.from(name)
console.log(ll)

// for-of loop
for(let i of p){
    console.log(i)
}