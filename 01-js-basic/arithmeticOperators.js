/* ARITHMETIC OPERATORS

+  addition
-  subtraction
*  multiplication
/  division
%  modulus (remainder)
** exponentiation
++ increment
-- decrement

*/

const num1 = 5;
const num2 = 10;
const num3 = 3;
console.log(num1 - num2 * num3);

/* 
In this expression, multiplication is performed before subtraction
because of operator precedence rules in JavaScript.
The '*' operator has higher precedence than the '-' operator,
so num2 * num3 is evaluated first, and then the result is
subtracted from num1. 
*/


/* Operator precedence in JavaScript (highest to lowest)

()            grouping
**            exponentiation
++ --         increment / decrement
* / %         multiplication / division / modulus
+ -           addition / subtraction
<< >> >>>     bitwise shift
< <= > >=     comparison
== != === !== equality
&             bitwise AND
^             bitwise XOR
|             bitwise OR
&&            logical AND
||            logical OR
??            nullish coalescing
?:            conditional (ternary)
= += -= *=    assignment (and variations)
,             comma

*/


let contador = 1;
contador++; //2
contador++; //3
contador++; //4
contador++; //5
console.log(contador)