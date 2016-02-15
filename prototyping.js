/**
 * Created by Bente on 15-02-2016.
 */

// Every JavaScript object has a prototype. The prototype is also an object.
// All JavaScript objects inherit their properties and methods from their prototype.
// All JavaScript objects inherit the properties and methods from their prototype.
// Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.
// Objects created with new Date() inherit the Date.prototype.
// The Object.prototype is on the top of the prototype chain.
// All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the Object.prototype.

// Constructor function to make objects
function createNewPersonObject(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getPersonObjekt: function () {
            return "Name: " + this.firstName;
        }
    }
}

//With a constructor function, you can use the new keyword to create new objects from the same prototype:
var newPerson = createNewPersonObject("Mikkel", "Vig", "25");
console.log(newPerson.getPersonObjekt());
