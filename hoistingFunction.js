/**
 * Created by Bente on 15-02-2016.
 */
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current
// scope (to the top of the current script or the current function).
// To avoid bugs, always declare all variables at the beginning of every scope.

// A function can also bee hoisted:

hoisted();

function hoisted(){
    console.log("Denne metode er også hoisted");
}