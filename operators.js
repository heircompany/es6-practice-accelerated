//sum an ARRAY
let numbers = [1,2,3,4,5];
function sumUp(toAdd) {
    let result = 0;
    for (let i = 0; i <toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
}
console.log(sumUp(numbers));

//rest parameter adds flexibility to function parameters
function sumUp(...toAdd) {
    //prints each value in an array
    console.log(toAdd);
    let result = 0;
    for (let i = 0; i <toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
}
console.log(sumUp(100, 20, 40));

//spread parameter adds flexibility to function calls
let numbers [1,2,3,4,5];
//prints each value individually
console.log(...numbers);
console.log(Math.max(...numbers));
