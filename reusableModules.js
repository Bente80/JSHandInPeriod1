/**
 * Created by Bente on 15-02-2016.
 */

var fs = require('fs');
var path = require('path');

module.exports = function (dirrName, filterstr, callback){
    fs.readdir(dirrName,function (error, list){
        if (error){
            return callback(error);
        }
        else {
            var newList = [];
            list.forEach(function (enFileiListen) {
                if (path.extname(enFileiListen) === '.' + filterstr) {
                    newList.push(enFileiListen);
                }
            });
            return callback(null, newList);
        };
    });
};