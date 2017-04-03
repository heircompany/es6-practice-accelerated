if (true) {
    //block scoping with LET
    let name = 'Joe';
}
// won't print my name
console.log(name);

let age = 26;
if (true) {
    //block scoping with LET
    let name = 'Joe';
    let age = 27;
    console.log(age);
}
// won't print my name
console.log(name);
let age = 21;
//prints 21
console.log(age);

// some people all caps constant variables
const AGES = [21,23,25,27];
console.log(AGES);
// AGES holds an ARRAY, not the values. Pointer is CONSTANT
AGES.push(29);
console.log(AGES);

// OBJ holds an OBJECT, not the value
const OBJ = {
    age: 26
};
console.log(OBJ);
OBJ.age = 30;
console.log(OBJ);

// HOISTING - DECLARE VARIABLE FIRST!
let age;
age = 26;
console.log(age);

// FUNCTION DECLARES
function doSomething() {
    age = 27;
};
doSomething();
console.log(age);
