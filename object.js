const obj1 = {
    a: 1
}
const obj2 = {
    b: 2
}
//merge 2 objects
const obj = Object.assign(obj1, obj2);
console.log(obj);

class Obj1 {
    constructor() {
        this.a = 1;
    }
}

class Obj2 {
    constructor() {
        this.b = 2;
    }
}

let obj1 = new Obj1();
let obj2 = new Obj2();
// all objects are merged in to first object
let obj = Object.assign(obj1, obj2);
console.log(obj1 instanceof Obj1);
console.log(obj2 instanceof Obj2);
console.log(obj.__proto__ === Obj1.prototype);
//pass empty object first to merge in to the general object prototype
let obj = Object.assign({}, obj1, obj2);
console.log(obj.__proto__ === Object.prototype);

//set the object prototype
let person = {

};
let boss = {
    name: 'katie'
}

Object.setPrototypeOf(person, boss);
console.log(obj.__proto__ === boss);
console.log(person.name);

// returns +1, -1, 0 or NaN depending on positive, negative, 0 or Not a Number
let number = -10;
console.log(Math.sign(number));
//cut off anything after decimals
console.log(Math.trunc(number));

//checks if string begins with j (CASE SENSITIVE)
let name = 'joe';
console.log(name.startsWith('j'));
//checks if string ends with e (CASE SENSITIVE)
console.log(name.endsWith('e'));
//checks if string includes o (CASE SENSITIVE)
console.log(name.includes('o'));

let number = NaN;
// returns TRUE
console.log(isNan(number));
console.log(Number.isNan(number));
console.log(Number.isFinite(Infinity));
console.log(Number.isInteger(Infinity));
console.log(Number.isFloat(Infinity));
console.log(Number.isNumber(number));
console.log(Number.isInfiite(Infinity));
