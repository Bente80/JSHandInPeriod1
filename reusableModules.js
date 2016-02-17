/**
 * Created by Bente on 15-02-2016.
 */

var fs = require('fs');
var path = require('path');

// I export a function:
module.exports = function (dirrName, filterstr, callback){
    fs.readdir(dirrName,function (error, list){
        if (error){
            return callback(error); // if error = true, an error message s logged
        }
        else {
            // we filter the list
            list = list.filter(function (enFileiListen) { // here I make a new list that is == it self just filtered
                return path.extname(enFileiListen) === ','+filterstr
            });
            // list is sent back with the callback, Null is null because the call went well.
            callback(null, list);
        };
    });
};