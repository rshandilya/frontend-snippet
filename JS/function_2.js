/*******************
Further Functions
*******************/

/******* Function Properties and Methods *******/

function square(x) {
return x*x;
}

square.length // 1

// Call and Apply Methods //

/***
The call() method can be used to set the value of this inside a function to an object that is provided as the first argument
***/

function sayHello(){
return `Hello, my name is ${ this.name }`;
}

const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };

sayHello.call(clark); // 'Hello, my name is Clarke'

sayHello.call(bruce); // 'Hello, my name is Bruce'

function sayHello(greeting='Hello'){
return `${ greeting }, my name is ${ this.name }`;
} s

ayHello.call(clark, 'How do you do'); //'How do you do, my name is Clark'
sayHello.call(bruce); //'Hello, my name is Bruce

square.call(null, 4) // 16 - need to provide null in absence of object

/***
apply() is same as call() except the argument is provided as argument.
***/
square.apply(null, [4]) // 16

// Custom Properties //

square.description = 'Squares a number that is provided as an argument'

// Memoization (result caching)

function square(x){
square.cache = square.cache || {};
if (!square.cache[x]) {
square.cache[x] = x*x;
}r
eturn square.cache[x]
}

/******* Immediately Invoked Function Expressions *******/

(function(){
const temp = 'World';
console.log(`Hello ${temp}`);
})();
// out: 'Hello World'

// Temporary Variables //

let a = 1;
let b = 2;
(()=>{
const temp = a;
a = b;
b = temp;
})();

// ES6 destructuring
let [a,b] = [1,2];
[a,b] = [b,a];

// Initialization Code //
/***
An IIFE can be used to set up any initialization code that there’ll be no need for again.
***/

(function() {
const name = 'Peter Parker'; // 
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday',
const date = new Date(),today = days[date.getDay()];
console.log(`Welcome back ${name}. Today is ${today}`);
})();

// out: 'Welcome back Peter Parker. Today is Tuesday'

// ES6 way
{ 
const name = 'Peter Parker'; // This might be obtained from a cookie in rea
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday',
const date = new Date(),today = days[date.getDay()];
console.log(`Welcome back ${name}. Today is ${today}`);
}

// Safe Use of Strict Mode //
(function() {
'use strict';
// All your code would go inside this function
})();

// Creating Self-contained Code Blocks //

(function() {
// block A
const name = 'Block A';
console.log(`Hello from ${name}`);
}());
(function() {
// block B
const name = 'Block B';
console.log(`Hello from ${name}`);
}());

/******* Functions that Define and Rewrite Themselves *******/

function party(){
console.log('Wow this is amazing!');
party = function(){
console.log('Been there, got the T-Shirt');
}}

party(); // 'Wow this is amazing!'
party(); // 'Been there, got the T-Shirt'
party(); // 'Been there, got the T-Shirt'

function party(){
console.log('Wow this is amazing!');
party = function(){
console.log('Been there, got the T-Shirt');
}} 
const beachParty = party; 

beachParty(); // 'Wow this is amazing!'
party(); // 'Been there, got the T-
beachParty(); // 'Wow this is amazing!'
beachParty(); // 'Wow this is amazing!'

// Losing Properties
/*** 
This is called the Lazy Definition Pattern and is often used when some initialization code is required the first time it’s invoked
***/
function party() {
console.log('Wow this is amazing!');
party = function(){
console.log('Been there, got the T-Shirt');
}}

party.music = 'Classical Jazz';
party();
party.music; // undefined

/******* Recursive Functions *******/

function factorial(n) {
if (n === 0) {
return 1;
} else {
return n * factorial(n - 1);
}}

function collatz(n, sequence=[n]) {
if (n === 1){
return `Sequence took ${sequence.length} steps. It was ${sequence}`;
} i
f (n%2 === 0) {
n = n/2;
} else {
n = 3*n + 1;
} r
eturn collatz(n,[...sequence,n]);
}

/******* Callbacks  *******/

// Event-driven Asynchronous Programming //

function wait(message, callback, seconds){
setTimeout(callback,seconds * 1000); // asynchronous
console.log(message);
}
// calback function

function selfDestruct(){
console.log('BOOOOM!');
}

wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');

//>> 'This tape will self-destruct in five seconds ... '
//>> 'Hmmm, should I accept this mission or not ... ? '
//>> 'BOOOOM!'

/*** but a callback always has to wait for the
current execution stack to complete before it’s invoked
***/
wait('This tape will self-destruct immediately ... ', selfDestruct, 0); 
console.log('Hmmm, should I accept this mission or not ... ?');
// >> 'This tape will self-destruct immediately ... '
// >> 'Hmmm, should I accept this mission or not ... ?'
// >> 'BOOOOM!


/******** Promises **********/
/***
* A promise represents the future result of an asynchronous operation.
* When a promise is created -> pending
* while the operation is taking place -> unsettled
* the operation has completed -> settled

* Resolved ― the asynchronous operation was completed successfully.
* Rejected ― the asynchronous operation didn’t work as expected, wasn't successfully completed or resulted in an error.
***/

// Creating A Promise //
const promise = new Promise( (resolve, reject) => {
// initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});


// Example //

const dice = {
sides: 6,
roll() {
return Math.floor(this.sides * Math.random()) + 1;
} }

const promise = new Promise( (resolve,reject) => {
const n = dice.roll();
setTimeout(() => {
(n > 1) ? resolve(n) : reject(n);
}, n*1000);
});

// Dealing With A Settled Promise
promise.then( result => console.log(`Yes! I rolled a ${result}`), result 
// if the operation fails instead:
promise.catch( result => console.log(`Drat! ... I rolled a ${result}`), result);

promise.then( result => console.log(`I rolled a ${result}`) )
.catch( result => console.log(`Drat! ... I rolled a ${result}`)

/**************/
const dice = {
sides: 6,
roll() {
return Math.floor(this.sides * Math.random()) + 1;
}} c
onsole.log('Before the roll');
const roll = new Promise( (resolve,reject) => {
const n = dice.roll();
if(n > 1){
setTimeout(()=>{resolve(n)},n*200);
} else {
setTimeout(()=>reject(n),n*200);
}}
);
roll.then(result => console.log(`I rolled a ${result}`) )
.catch(result => console.log(`Drat! ... I rolled a ${result}`) );
console.log('After the roll');
/**************/
// Chaining Multiple Promises //
/***
when multiple asynchronous tasks are required
to be carried out one after the other. 
***/
login(userName)
.then(user => getPlayerInfo(user.id))
.then(info => loadGame(info))
.catch( throw error)

