/**
 * Created by Jonathan on 5/21/2017.
 */
console.log('hello TypeScript');
function printDivider(){
    console.log("=====================================================================");
}
function doCalculation(a: number ,b: number,c: number){
    return (a * b) + c;
}
var result = doCalculation(2,3,1);
console.log('doCalculation():  ' + result);

var myString: string;
var myNumber: number;
var myBoolean: boolean;
myString = "1";
myNumber = 1;
myBoolean = true;

var myVariable = "test";
console.log("myVariable= " + myVariable);
console.log(`myVariable=${myVariable}`);

 // function testArguments(){
 //     if(arguments.length > 0){
 //         for(var i = 0; i < arguments.length; i++){
 //             console.log("argument[" + i + "]= " + arguments[i]);
 //         }
 //     }
 // }
 // testArguments(1,2,3);
 // testArguments("firstArg");

function testArguments(... argArray: number[]){
    if(argArray.length > 0){
        for(var i = 0; i < argArray.length; i++){
            console.log(`argArray[${i}] = ${argArray[i]}`);
            console.log(`argmeents[${i}] = ${arguments[i]}`);
        }
    }
}
testArguments(9);
testArguments(1,2,3);

printDivider();

function callbackFunction(text:string) {
    console.log(`inside callbackFunction ${text}`);
}

function doSomethingWithCallback(
    initialText: string,
    callback: (initialText: string) => void
) {
    console.log(`inside doesomethingWithCallback ${initialText}`);
    callback(initialText);
}

doSomethingWithCallback("myText", callbackFunction);
//doSomethingWithCallback("myText", "this is not a function");

function callbackFuntionWithNumber(arg1: number){
    console.log(`inside callbackFunctionWithNumber ${arg1}`);
}
//doSomethingWithCallback("myText", callbackFuntionWithNumber)
printDivider();
function add(x,y) {
    return x + y;
}

console.log('add(1,1)=' + add(1,1));
console.log('add("1","1")=' + add("1","1"));