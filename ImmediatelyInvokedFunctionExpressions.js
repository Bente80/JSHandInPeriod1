/**
 * Created by Bente on 15-02-2016.
 */

//IIFE - Immediatly Invoked Function Expressions
//In JavaScript, every function, when invoked, creates a new execution context. Because variables and functions
// defined within a function may only be accessed inside, but not outside, that context, invoking a function
// provides a very easy way to create privacy.


(function() {
    // the code here is executed once in its own scope
})();


//Passing variables into the scope is done as follows:
(function(a, b) {
    // a == 'hello'
    // b == 'world'
})('hello', 'world');