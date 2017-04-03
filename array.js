let array = Array(5);
console.log(array);
let array2 = Array.of(5, 10, 11);
console.log(array2);
let array3 = [10, 12, 16];
console.log(array3);
let newArray = Array.from(array3, val => val * 2);
console.log(newArray);
//replaces all values in array with specified value
array3.fill(100);
//replace some value
array3.fill(100, 0, 2);
//finds first matching element in array
console.log(array.find(val => val >= 12));

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5},
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}
console.log(inventory.find(findCherries));

let array = [1,2,3];
//change value of 1 value to value of another
console.log(array.copyWithin(1, 0));
console.log(array);
//change values and move values place in array
console.log(array.copyWithin(1, 0, 2));
console.log(array);
//iterate through values in array as value pair (position, value)
let it = array.entries();
for (let element of it) {
    console.log(element);
}
