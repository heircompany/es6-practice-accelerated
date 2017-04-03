// SYMBOLS ARE FOR META PROGRAMMING
// assign values to properties like createdAt, which shouldn't change across entire app
let symbol = Symbol('debug');
console.log(symbol); // prints blank object without ID
console.log(symbol.toString()); // prints object with value
console.log(typeof symbol); // prints "symbol" because it's a type!

let anotherSymbol = Symbol('debug');
console.log(symbol === anotherSymbol); // prints FALSE - each symbol is unique!

let obj = {
    name: 'Joe',
    [symbol]: 26
}

console.log(obj); // symbol not printed!
console.log(obj[symbol]); // prints 26

// SHARING SYMBOL IDs (like to access timestamps across the app)
let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');

let person = {
    name: 'Joe',
    age: 21
}
function makeAge(person) {
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] = 26;
}
makeAge(person);
//print age from symbol keys
console.log(person[symbol1]);
console.log(person[symbol2]);
//prints original object value
console.log(person['age']);

// WELL KNOWN SYMBOLS
class Person {

}
Person.prototype[Symbol.toStringTag] = 'Person'

let person = new Person();
console.log(person)

let numbers = [1,2,3];
numbers[Symbol.toPrimitive] = function () {
    return 999;
}
console.log(numbers + 1);
