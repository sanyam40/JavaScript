/* 
   - PRIMITIVE DATA TYPES ARE SET OF BASIC DATA TYPES IN JS.
   - Object is a non primitive datatype in js.

   - There are the 7 primitve data types. ( NNBBSSU )
   1)NULL 2)NUMBER 3)STRING 4)SYMBOL 5)UNDEFINED 6)BOOLEAN 7)BigInt

*/

let a=null
let b=345
let c="Sanyam"
let d=Symbol("Hello Symbol")
let e
let f=true
let g=BigInt(678)
console.log(a,b,c,d,e,f,g)
// FOR PRINTING DATA TYPE
console.log(typeof a)

// - Non primitve data type -- OBJECT IN JS

const item={
    "Sanyam" : true,
    "Sahil" : false,
    "Vidit" : 67,
    "Piyush" : undefined
}
item['Saksham']=78
console.log(item["Sanyam"])
console.log(item.Sahil)
console.log(item)

