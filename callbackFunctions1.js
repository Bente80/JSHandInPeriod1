/**
 * Created by Bente on 15-02-2016.
 */

// A callback is a piece of executable code that is passed as an argument to other code, which is expected
// to call back (execute) the argument at some convenient time. The invocation may be immediate as in a synchronous
// callback, or it might happen at later time as in an asynchronous callback.
// In short terms a callback is a function that is passed as an argument to another function and is
// invoked after some kind of event.

var names = ["Georgina", "Jeanette", "Susanne", "Sus", "Ann"];

function lengthOfNames(value) {
    if(value.length <= 3){
        return value;
    }
}

function lettersToUppercase(value){
    return value.toUpperCase();
}

console.log(names.filter(lengthOfNames));
console.log(names.map(lettersToUppercase));
