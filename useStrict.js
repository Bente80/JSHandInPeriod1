/**
 * Created by Bente on 15-02-2016.
 */

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.
// Strict mode is declared by adding "use strict"; to the beginning of a JavaScript or a JavaScript function.
// Strict mode makes it easier to write "secure" JavaScript.

x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
    "use strict";
//    y = 3.14;   // This will cause an error, becaused y is not defined.
}