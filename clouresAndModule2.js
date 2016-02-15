/**
 * Created by Bente on 15-02-2016.
 */

// A closure is the act of binding all free variables, and functions into a closed expression,
// that persist beyond the lexical scope from which they were created.

objectBuilder = (function(){

    var reusableModule = {};

    reusableModule.age;
    reusableModule.name;

    reusableModule.setAge = function(myAge){
        reusableModule.age = myAge;
    }

    reusableModule.setName = function(myName){
        reusableModule.name = myName;
    }

    reusableModule.getInfo = function(){
        return "Name: "+reusableModule.name+" Age: "+reusableModule.age;
    }

    return reusableModule;
});

var newObjekt = objectBuilder();
var anotherNewObjekt = objectBuilder();

newObjekt.setAge("31");
newObjekt.setName("Georgina");
anotherNewObjekt.setAge("33");
anotherNewObjekt.setName("Steffen");

console.log(newObjekt.getInfo());
console.log(anotherNewObjekt.getInfo());