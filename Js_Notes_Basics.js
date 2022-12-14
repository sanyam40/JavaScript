/* DIFFERENCE BETWEEN VAR,LET & CONST

1)var is globally scoped while let and const are blocked scoped.
2)var can be updated and re declared whithin its scope.
3)let can be updated but not re-declared.
4)const can neither be updated nor re-declared.
5)var variables are intitalized with undefined whereas let and const variables aren't intialized
6)const must be intialized during declaration unlike let and var. */

// 1)
var b="Ncu";
{
    let b=89;
    console.log(b);
}
console.log(b);

// 2) REDECALRING VAR
var a=57;
console.log(a);
a="sanyam";
console.log(a);

// 3)
let c=67;
console.log(c);
c="sahil";
console.log(c);

// 4)
const d="Vidit";
console.log(d);

/*------------------------------------------------------------------------------------------------------

   - PRIMITIVE DATA TYPES ARE SET OF BASIC DATA TYPES IN JS.
   - Object is a non primitive datatype in js.

   - There are the 7 primitve data types. ( NNBBSSU )
   1)NULL 2)NUMBER 3)STRING 4)SYMBOL 5)UNDEFINED 6)BOOLEAN 7)BigInt  */

let a=null
let b=345
let cc="Sanyam"
let dd=Symbol("Hello Symbol")
let e
let f=true
let g=BigInt(678)
console.log(a,b,cc,dd,e,f,g)
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

/* ------------------------------------------------------------------------------------------------------

-- Conditional expressions
-FOR INSTALLING PROMPT IN VS-- npm install prompt-sync */

const prompt=require('prompt-sync')();

let age=prompt("ENTER AGE : ")
if(age>=9){
    console.log("VALID")
}
else{
    console.log("NOT VALID")
    // alert("NOT VALID")
}


/* ----------------------------------------------------------------------------------------------------------

-- LOOPS IN JS

1) FOR LOOP */
 for (let i= 0; i< 5;i++) {
    console.log(i);
}

// 2) WHILE LOOP
let a=5;

while(a!=9){
    console.log("HELLO","SANYAM")
    a++;
}

// 3) FOR IN LOOP
let obj={
    sanyam:88,
    arpita:89,
    sahil:99
}
for(let a in obj){
    console.log("Marks of "+a+" are "+obj[a])
}

/* ----------------------------------------------------------------------------------------------

-- functions in js  */
function plus(a,b){
    return a+b
}
const sum=(a,b)=>{
    return a+b;
}
let a=sum(5,6)
console.log(a)

/* ----------------------------------------------------------------------------------------------

--- STRINGS IN JS
-- Template Literals in js  */

let boy="sahil"
let boy2="sanyam"
let sentence=`${boy} is friend of ${boy2}`
console.log(sentence)

let a="narang\nabc"
console.log(a)

// METHODS OF STRINGS
console.log(boy.length)
console.log(boy.toUpperCase())
console.log(boy.toLowerCase())
console.log(boy.slice(1,3)) // NOT INCLUDING 3
console.log(boy.slice(3))
console.log(boy.replace('s','ee'))
console.log(boy.trim()) // REMOVE WHITE SPACE
console.log(boy.concat("is a friend of ",boy2)) // ADDING STRINGS
