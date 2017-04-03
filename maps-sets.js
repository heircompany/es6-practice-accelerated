let cardAce = {
    name: 'Ace of Spades'
};

let cardKing = {
    name: 'King of Clubs'
};

let deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);
console.log(deck);
deck.set('as', cardAce);
console.log(deck.size);
console.log(deck.get('as'));
deck.delete('kc');
console.log(deck.size);
deck.clear();

for (entry of deck) {
    console.log(entry);
}


// safely alters Map, frees up resources and garbage collection
// weak can get rid of entries, so keys must be reference types
// can act as garbage collector and take up less memory
// key may only be a javascript object
// NOT ITERABLE - can't loop, must match by key
let key1 = {a:1};
let key2 = {b:2};

let deck = new WeakMap();
deck.set(key1, cardAce);
deck.set(key2, cardKing);

console.log(deck.get(key1));
//arrays hold any value
let array = [1,1,1];
//Sets only hold unique values, only 1 value will get stored below
let set = new Set([1,1,1]);
set.add(2);
// key = entry = value, no need to call any
// for (element of set.entries()) {
// for (element of set.keys()) {
// for (element of set.values()) {
for (element of set {
    console.log(element);
};
console.log(set.has(2));
//deletes unique value (and clones)
set.delete(1);
//clear entire set
set.clear();
// weak sets can only store OBJECTS
let set = new Weakset([{a:1}, {b:2}, {b:2}]);
// below object is NEW and won't appear in the set
console.log(set.has({b:2}));
// to check within the set, create the objects first as variables
let obj1 = {a:1};
let obj2 = {b:2};
let obj3 = {c:3};
let set = new Weakset([obj1, obj2, obj2]);
console.log(set.has(obj2));
set.add(obj3);
