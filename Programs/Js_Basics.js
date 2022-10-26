// BASIC OF JAVASCRIPT

// USED FOR PRINTING

console.log("HELLO WORLD !");

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

