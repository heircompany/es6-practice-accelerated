//DESCTRUCTURING DOES NOT CHANGE ORIGINAL VALUES
//ARRAYS - pull out by POSITION
let numbers = [1,2,3];
// let a = numbers[0];
// let b = numbers[1];
// let c = numbers[2];
let [a,b,c] = numbers;
console.log(numbers);
console.log(a);
console.log(b);
console.log(c);
// d is undefined until defined
console.log(d);
// returns all but first value
let [a, ...b] = numbers;
console.log(b);
// leave out a value
let [a, ,c] = numbers;
console.log(a,c);
// immediate destructure
let [a,b] = [1,2,3];
console.log(a,b);
// returns default for d
let [a,b,c,d = 'default'] = numbers;
console.log(d)
// swap variables
let a = 5;
let b = 10;
let c = 15;
[c,b,a] = [a,b,c];
console.log(a);
console.log(b);
console.log(c);

//OBJECTS - pull out by PROPERTY
let obj = {
    name: 'joe',
    age: 26,
    greet: function () {
        console.log(`Hello ${name}!`);
    }
};
//create each as a variable and leave out greet function
//give greet an alias hello in new file
let {name,greet: hello} = obj;
console.log(name);
hello();
