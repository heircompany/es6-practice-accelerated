// Modules are always in Strict Mode (no need to define "use strict")
// Modules don't have a shared, global Scope. Instead each Module has its own Scope

// exporting something to outside file
// NOT copying, just REFERENCING
// can group exports
let keyValue = 1000;
function test() {
    console.log('test success!');
}
export {keyValue, test};

//default exports
let ab = 'text';
export default ab; // don't need to call it ab, can call it whatever

// importing something from outside file
import ab, {keyValue as key, test as testSuite} from 'external';
// using asterisks
import * as stuff from 'external';
console.log(stuff.key);
stuff.testSuite()
