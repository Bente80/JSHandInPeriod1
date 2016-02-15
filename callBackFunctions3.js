/**
 * Created by Bente on 15-02-2016.
 */

var numberArray1 = [1,2,3];
var numberArray2 = [1,2,3];

//ligger index sammen og bruger callback på det nye array.
function handleNumArrays(na1,na2,callback) {
    var returnArray = [];
    for (var i = 0; i < na1.length; i++){
        returnArray.push(na1[i] + na2[i]);
    }
    callback(returnArray);
}
// den første callback funktion som sætter komma imellem tallene.
function addComma(array){
    console.log(array.join(", "));
}

// denne funktion pludser alle tallene med hinanden.
function calculates(array){
    var result1 = 0;
    for (var i in array){
        result1 += array[i];
        i++;
    }
    console.log(result1);
}

// den anden callback funktion som ganger hvert tal med 10 og sætter komma imellem dem.
function multiplies(array){
    var result2= 0;
    result2 = array.map(function(numberToDouble){
        return numberToDouble * 10;
    })
    console.log(result2.join(", "));
}

// denne funktion som ganger alle tallene med hinanden.
function multipliesItSelf(array){
    var result2=1;
    for (var i in array){
        result2*=array[i];
        i++;
    }
    console.log(result2)
}

handleNumArrays(numberArray1,numberArray2,addComma);
handleNumArrays(numberArray1,numberArray2,calculates);
handleNumArrays(numberArray1,numberArray2,multiplies);
handleNumArrays(numberArray1,numberArray2,multipliesItSelf);