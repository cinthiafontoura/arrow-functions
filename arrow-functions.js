/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */


// Vanilla JavaScript Function
function addTwonumbers(a, b) {
    // Code block
    return a + b;
}

let sum = addTwonumbers(3, 5);
console.log(sum);


// Arrow Function With Parameters
const addTwonumbers2 = (a, b) => {
    // Code block
    return a + b;
}

let sum2 = addTwonumbers2(2, 5);
console.log(sum2);


// Single Line Arrow Function With Parameters
// const addTwonumbers3 = (a, b) => (a + b); also valid
const addTwonumbers3 = (a, b) => a + b;
let sum3 = addTwonumbers3(6, 4);
console.log(sum3);


// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!');

const sayHello = () => console.log('hello');
sayHello();


// Returning Multiple Lines
const returnMultiplesLines = () => (
    `<p>
        This is a multipleline string!
    </p>`
)
console.log(returnMultiplesLines());