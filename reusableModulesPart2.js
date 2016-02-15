/**
 * Created by Bente on 15-02-2016.
 */

var mymodule = require('./reusableModules.js');

var dirrName = process.argv[2];
var filterstr = process.argv[3];

mymodule(dirrName,filterstr, function(error, list){

    if (error){
        console.error(error);
    }
    else{
        list.forEach(function (filenavn) {
            console.log(filenavn);
        });
    }
});
