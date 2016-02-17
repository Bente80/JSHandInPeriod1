/**
 * Created by Bente on 15-02-2016.
 */

// Here we make a module that filters something from the other js.
var mymodule = require('./reusableModules.js');
// I make sure I can use a filter from another file
var dirrName = process.argv[2]; // arg. 1 = name of directory
var filterstr = process.argv[3]; // arg. 2. = type of file

// i use the filter
mymodule(dirrName,filterstr, function(error, list){

    if (error){
        console.error(error); // if error = true, an error message s logged
    }
    // if everything is fine this happends:
    else{
        list.forEach(function (filenavn) {
            // all filenames in list is logged.
            console.log(filenavn);
        });
    }
});
