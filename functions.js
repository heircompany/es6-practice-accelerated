// es2015
function fna() {
    console.log('hello');
};
fna();

// es6 arrow
const fnb = () => {
    console.log('hello 2');
};
fnb();

// es6 shortened arrow for 1 line functions
const fnc = () => 'hello 3';
console.log(fnc());

// no arguments
const fnd = () => {
    let a =2;
    let b = 3;
    return a+b;
}
console.log(fnd());

// with arguments
const fne = (a, b) => {
    return a + b;
};
console.log(fne(3,8));

// shortened
const fnf = a => a + 8;
console.log(fnf(3));

// more syntax shortening
setTimeout(() => console.log('hello'), 1000);

// this with arrows vs standard functions
// this typically refers to global scope
// example with button
const button = document.querySelector('button');

// will select button
function thisfn() {
    console.log(this);
}
thisfn();

// will select based on defined context (in this example, the window)
let thisfn2 = () => console.log(this);
thisfn2();

button.addEventListener('click', thisfn);

//DEFAULT FUNCTION VALUES
//returns false
function isEqualTo(number, compare) {
    return number === compare;
}
console.log(isEqualTo(10, 9));

//returns true (can set vars after first, can also set other vars to a function)
function isEqualTo(number, compare = 10) {
    return number === compare;
}
console.log(isEqualTo(10));

//returns true
function isEqualTo(number = 10, compare = 10) {
    return number === compare;
}
console.log(isEqualTo());

//returns false (can't set first var and not others)
function isEqualTo(number = 10, compare) {
    return number === compare;
}
console.log(isEqualTo(10));

//returns false (compare is not set when called)
function isEqualTo(number = compare, compare = 10) {
    return number === compare;
}
console.log(isEqualTo());

//returns ftrue (number was defined when called)
function isEqualTo(number = 10, compare = number) {
    return number === compare;
}
console.log(isEqualTo());

//object es6 syntax shortening
//age gets overridden on obj
//object methods
let name = 'Scott'
age = 25;
let obj = {
    name,
    age: 26,
    greet() {
        console.log(this.name + ", " + this.age)
    }
};
obj.greet();

//can be a string that calls a function too
let name = 'Scott'
age = 25;
//dynamic fields
let ageField  = "age";

let obj = {
    name,
    [ageField]: 28,
    "greet" () {
        console.log(this.name + ", " + this.age)
    }
};
// all print 28 from ageField
obj["greet"]();
console.log(obj.age);
console.log(obj[ageField]);
console.log(obj["age"]);
