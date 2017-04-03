// finding out if an object has a certain property and call functions
// advantages
// bundles existing functionality in to one method
// cleaner, quicker
// introduces new methods for similar workflows, like proxy method
class Person {
    constructor(name) {
        this.name = name;
    }
}
function TopObj() {
    this.age = 26;
}
//works like new Person but with more options
//pass in 3 things (3rd optional):
// 1. constructor object / class
// 2. value for constructor
let person = Reflect.construct(Person, ['Joe']);
console.log(person instanceof Person);
// 3. optional template for Object Prototype
let person2 = Reflect.construct(Person, ['Mike'], TopObj);
//returns false
console.log(person2 instanceof Person);
//returns true
console.log(person2.__proto__ = topObj.prototype);

//methods for Reflect API
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(prefix) {
        console.log(prefix + `hello, my name is ${this.name}`);
    }
}
let person = Reflect.construct(Person, ['Joe', 26]);
Reflect.apply(person.greet, person, ['...']);
//PROTOTYPES & CHANGING WITH REFLECT API
// APPLY
//1. call a class method
//2. set the value of "this"
//3. additional arguments passed to function (optional)
class Person {
    constructor(name) {
        this.name = 'Joe';
    }
}
let person = new Person();
let proto = {
    age: 30,
    greet() {
        console.log('Hello!');
    }
}
Person.prototype.age = 26;
Reflect.setPrototypeOf(person, proto)
console.log(Reflect.getPrototypeOf(person) === Person.prototype);
console.log(Reflect.getPrototypeOf(person));
Reflect.apply(person.greet, null, []);


// OBJECT PROPERTIES
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let person = new Person('Joe', 26);
// passing arguments dynamically - instead of console.log(person.name)
console.log(Reflect.get(person, 'name'));

//WORKS WITH A GETTER/SETTER
class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let mum = {
    _name: 'Mum'
};
let person = new Person('Joe', 26);
//1. Object constructor
console.log(Reflect.ownKeys(person));
//2. property
//3. value
//4. prototype from SET to alter
// returns Mum
Reflect.set(person, 'name', 'Joey');
console.log(Reflect.get(person, 'name', mum));
// returns Joey
Reflect.set(person, 'name', 'Joey', mum);
console.log(Reflect.get(person, 'name', mum));

// DEFINE NEW PROPERTIES
Reflect.defineProperty(person, 'hobbies', {
    writable: true,
    value: ['Sports', 'Investing', 'Programming']
});
console.log(person.hobbies);
//need writable property to overwrite like below
person.hobbies = ['NONE'];
console.log(person.hobbies);
//delete a property - instead of  "delete person.age"
Reflect.deleteProperty(person, 'age');
console.log(person.age);

// EXTENDING OBJECTS
Reflect.preventExtensions(person);
//below now fails
Reflect.defineProperty(person, 'hobbies', {
    value: ['Sports', 'Investing', 'Programming']
});
console.log(person.hobbies);
//returns true or false
console.log(Reflect.isExtensible(person));
