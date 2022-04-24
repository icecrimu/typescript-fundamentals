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
