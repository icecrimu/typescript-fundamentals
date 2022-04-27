let isPresent: boolean = false
let magin: number = 66.6
let hello: string = "world"

let notDefined: undefined = undefined
let notPresent: null = null

let penta: symbol = Symbol("start")
// let biggy: bigint = 24n
let regexp: RegExp = new RegExp("ab+c")

let array: Array<number> = [1, 2, 3]

let set: Set<number> = new Set([1, 2, 3])

class Queue<T> {
  private data: Array<T> = []
  push(item: T) {
    this.data.push(item)
  }
  pop(): T | undefined {
    return this.data.shift()
  }
}

let queue: Queue<number> = new Queue()

// Array
let numArray: number[] = [1, 2, 3]

// Usage
numArray = [1]
numArray = [1, 2, 3, 4, 5]
// numArray = ['Hello'] // Error

// Tuple
let tuple: [number, number] = [0, 0]

// Usage
tuple = [1, 1]
tuple = [2, 6]
// tuple = [5] // Error: must be 2 items
// tuple = [5,4,3] // Error: must be 2 items
// tuple = ["yow", 23] // Error: must be number

// Types and Type Aliases
type Point = { x: number; y: number }

let center: Point = {
  x: 0,
  y: 0
}

let unit: Point = {
  x: 1,
  y: 1
}

// const declarations
const point: Point = { x: 0, y: 0 }

// point = {x: 1, y: 1} // Error

point.x = 123
point.y = 456
