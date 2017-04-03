//GENERATORS ITERATE SPECIAL FUNCTION VALUES
function *select() {
    yield 'house';
    yield 'garage';
}

let it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());


let obj = {
    [Symbol.iterator]: gen
}

const x = 10
function *gen(end) {
    for (let i = 0; i < end; i++) {
        try {
        yield i;
        } catch (e) {
            console.log(e);
        }
    }
}

let it = gen(x);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.return('an error occured'));
console.log(it.next());

// for (let element of obj) {
//     console.log(element);
// }
