/**
 * Created by Bente on 15-02-2016.
 */

var names = ["Georgina", "Jeanette", "Susanne", "Sus", "Ann"];

function lengthOfNames(value) {
    if (value.length <= 3) {
        return value;
    }
}

function lettersToUppercase(value) {
    return value.toUpperCase();
}

Array.prototype.UsingFilterPrototype = function (lengthOfNamesCallback) {
    var newArray = [];

    for (var i = 0; i < this.length; i++) {
        if (lengthOfNamesCallback(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

Array.prototype.UsingMapPrototype = function (callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++)
        newArray.push(callback(this[i]));
    return newArray;
};

console.log(names.UsingFilterPrototype(lengthOfNames));
console.log(names.UsingMapPrototype(lettersToUppercase));

