"use strict";
let isPresent = false;
let magin = 66.6;
let hello = "world";
let notDefined = undefined;
let notPresent = null;
let penta = Symbol("start");
// let biggy: bigint = 24n
let regexp = new RegExp("ab+c");
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
    console.log("LOG:", message);
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
