"use strict";
let isPresent = false;
let magin = 66.6;
let hello = 'world';
let notDefined = undefined;
let notPresent = null;
let penta = Symbol('start');
// let biggy: bigint = 24n
let regexp = new RegExp('ab+c');
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let queue = new Queue();
// Array
let numArray = [1, 2, 3];
// Usage
numArray = [1];
numArray = [1, 2, 3, 4, 5];
// numArray = ['Hello'] // Error
// Tuple
let tuple = [0, 0];
// Usage
tuple = [1, 1];
tuple = [2, 6];
let center = {
    x: 0,
    y: 0
};
let unit = {
    x: 1,
    y: 1
};
// const declarations
const point = { x: 0, y: 0 };
// point = {x: 1, y: 1} // Error
point.x = 123;
point.y = 456;
// Functions
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log('LOG:', message);
}
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
sum(1, 2); // 3
sum(1, 2, 3); // 6
let addNum;
addNum = function (a, b) {
    return a + b;
};
let user = { id: 'user-asfedfk' };
let product = { id: 'product-dklfdj' };
user = product;
let point2D = { x: 0, y: 1 };
let point3D = { x: 0, y: 1, z: 2 };
// Extra info
point2D = point3D;
function takesPoint2D(point) { }
takesPoint2D(point3D);
// Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
let cat = new Animal('Cat');
cat.move(10);
// cat.name = "Dog" // Error
class Bird extends Animal {
    fly(distanceInMeters) {
        console.log(`${this.name} flew ${distanceInMeters}m.`);
    }
}
// Generics
// class Queue2<T> {
//   data = []
//   push(item: T) {
//     this.data.push(item)
//   }
//   pop(): T {
//     return this.data.shift()
//   }
// }
// const queue2 = new Queue2<number>()
// queue2.push(123)
// queue2.push(456)
// console.log(queue2.pop().toPrecision(1))
// console.log(queue2.pop().toPrecision(1))
// Special Types
let exampleAny;
let exampleUnknown;
// any
exampleAny = 123;
exampleAny = 'Hello';
// unknown
exampleUnknown = 123;
exampleUnknown = 'World';
// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool = exampleAny;
// unknown
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == 'boolean') {
    let unknownSetBool = exampleUnknown;
}
// Javascript to TypeScript
function loadString() {
    // ....
}
function loadNumber() {
    // ....
}
let someLegacyVariable;
someLegacyVariable = loadString();
if (typeof someLegacyVariable == 'string') {
    console.log(someLegacyVariable.trim());
}
someLegacyVariable = loadNumber();
if (typeof someLegacyVariable == 'number') {
    console.log(someLegacyVariable.toFixed(2));
}
// Universal Utilities
function logAny(value) {
    if (typeof value == 'number') {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value);
    }
}
logAny(123.456);
logAny('Hello world!');
// Type Assertions
function load() {
    return 'Hello';
}
let printHello = load();
const trimmed = hello.trim();
// const trimmed = (<string>hello).trim() <string> will not work in .tsx
// Type Casting
let leet;
leet = '1234';
// Use as number
const number = +leet;
console.log(number === 1234); // true
console.log(number); // 1234
