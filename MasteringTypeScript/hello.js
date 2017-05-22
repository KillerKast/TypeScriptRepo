/**
 * Created by Jonathan on 5/21/2017.
 */
console.log('hello TypeScript');
function printDivider() {
    console.log("=====================================================================");
}
function doCalculation(a, b, c) {
    return (a * b) + c;
}
var result = doCalculation(2, 3, 1);
console.log('doCalculation():  ' + result);
var myString;
var myNumber;
var myBoolean;
myString = "1";
myNumber = 1;
myBoolean = true;
var myVariable = "test";
console.log("myVariable= " + myVariable);
console.log("myVariable=" + myVariable);
// function testArguments(){
//     if(arguments.length > 0){
//         for(var i = 0; i < arguments.length; i++){
//             console.log("argument[" + i + "]= " + arguments[i]);
//         }
//     }
// }
// testArguments(1,2,3);
// testArguments("firstArg");
function testArguments() {
    var argArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argArray[_i] = arguments[_i];
    }
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log("argArray[" + i + "] = " + argArray[i]);
            console.log("argmeents[" + i + "] = " + arguments[i]);
        }
    }
}
testArguments(9);
testArguments(1, 2, 3);
printDivider();
function callbackFunction(text) {
    console.log("inside callbackFunction " + text);
}
function doSomethingWithCallback(initialText, callback) {
    console.log("inside doesomethingWithCallback " + initialText);
    callback(initialText);
}
doSomethingWithCallback("myText", callbackFunction);
//doSomethingWithCallback("myText", "this is not a function");
function callbackFuntionWithNumber(arg1) {
    console.log("inside callbackFunctionWithNumber " + arg1);
}
//doSomethingWithCallback("myText", callbackFuntionWithNumber)
printDivider();
function add(x, y) {
    return x + y;
}
console.log('add(1,1)=' + add(1, 1));
console.log('add("1","1")=' + add("1", "1"));
