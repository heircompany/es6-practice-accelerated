// CLASSES ARE BLUEPRINTS
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name.toUpperCase();
    }
    set name(value) {
        if (value.length > 2) {
        this._name = value;
        }
        console.log('REJECTED');
    }
}

let person = new Person('Joe');
//all 3 work
console.log(person);
console.log(person.name);
console.log(person._name);
