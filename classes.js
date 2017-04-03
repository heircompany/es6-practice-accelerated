// function Person () {
//
// }

// CLASSES ARE BLUEPRINTS
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`hello, my name is ${this.name} and I am `+this.age);
    }
}
// let person = new Person('Joe');
// console.log(person);
// person.greet();

// not the same
console.log(person.__proto__ === Object.prototype);
console.log(person.__proto__ === Object);
// the same
console.log(person.__proto__ === Person.prototype);

// add static to access methods on classes without object creation
class Helper {
    static logTwice(message) {
        console.log(message);
        console.log(message);
    }
}
Helper.logTwice('Logged Twice!');

// INHERITANCE are children of the parent Class. use super() to call parent constructor
class Joe extends Person {
    constructor(age) {
        super('Joe');
        this.age = age;
    }
    greetTwice() {
        this.greet();
        super.greet();
    }
}

let joe = new Joe(26);
joe.greet();
joe.greetTwice();
// not the same
console.log(joe.__proto__ === Person.prototype);
console.log(joe.__proto__ === Object);
// the same
console.log(joe.__proto__ === Joe.prototype);
