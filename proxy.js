// PROXIES WRAP OBJECTS AND CHANGE ACCESS METHOD
// META PROGRAMMING HAS BENEFITS
let person = {
    name: 'Joe',
    age: 26
};
//creating traps works for any object
// 3 arguments for handler (target object, property, receiver is optional)
let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 'Name does not Exist';
    },
    set: function(target, property, value) {
        if (value.length >= 2) {
            Reflect.set(target, property, value);
        }
    }
};
//Proxy argument options
//object to target
//handler to process
const proxy = new Proxy(person, handler);
//name is not updated because it is less than a length of 2
proxy.name = 'J';
console.log(proxy.name);
//name is updated because it is greater than a length of 2
proxy.name = 'Joey';
console.log(proxy.name);

//PROXIES AS PROTOTYPES
let person = {
    name: 'Joe',
    age: 26
};
let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 'Name does not Exist';
    }
};
//empty object returns false
const proxy = new Proxy({}, handler);
console.log(proxy.name);
//reflect and proxy prototyping
//direct access with proxy protection
Reflect.setPrototypeOf(person, proxy);
console.log(person.name);
//returns the fail case above 'Name does not Exist'
console.log(person.hobbies);

//PROXIES ON PROXIES ON PROXIES!
let person = {
    name: 'Joe',
    age: 26
};
let handler = {

};
let protoHandler = {
    get: function(target, name) {
        return name in target ? target[name] : 'Name does not Exist';
    }
};
const proxy = new Proxy({}, handler);
const protoProxy = new Proxy(proxy, protoHandler);
Reflect.setPrototypeOf(person, protoProxy);
console.log(person.hobbies);

//WRAPPING FUNCTIONS WITH PROXIES
function log(message) {
    console.log('log entry: ' + message);
}
log('hello!');

let handler = {
    apply: function(target, thisArg, argumentsList) {
        if (argumentsList.length === 1) {
            return Reflect.apply(target, thisArg, argumentsList);
        }
    }
};
let proxy = new Proxy(log, handler);
//executes like a function
proxy('hello...');

//REVOCABLE PROXIES
let person = {
    name: 'Joe'
};
let handler = {
    get: function(target, property) {
        return Reflect.get(target, property);
    }
};
//using destructuring
let {proxy, revoke} = Proxy.revocable(person, handler);
//throw error and stop function with revoke()
revoke();
console.log(proxy.name);
