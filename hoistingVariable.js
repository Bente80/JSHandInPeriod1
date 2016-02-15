/**
 * Created by Bente on 15-02-2016.
 */

//In JavaScript, a variable can be declared after it has been used. This is called hoisting.
// This works because the declaration "x" is hoisted, even though we have not declares it.

x = 5;
console.log(x);

var x;


// Another example

EnfedSætning = "det kører bare";

console.log(EnfedSætning);

EnfedSætning = "jubiii"; //Here the "jubiii" is not printed out, because the assignment is not hoisted.

var EnfedSætning;



