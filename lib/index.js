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
// tuple = [5] // Error: must be 2 items
// tuple = [5,4,3] // Error: must be 2 items
// tuple = ["yow", 23] // Error: must be number
