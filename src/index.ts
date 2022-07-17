let isPresent: boolean = false
let magin: number = 66.6
let hello: string = 'world'

let notDefined: undefined = undefined
let notPresent: null = null

let penta: symbol = Symbol('start')
// let biggy: bigint = 24n
let regexp: RegExp = new RegExp('ab+c')

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

// Functions
function add(a: number, b: number): number {
  return a + b
}

function log(message: string): void {
  console.log('LOG:', message)
}

function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current
  })
}

sum(1, 2) // 3
sum(1, 2, 3) // 6

type Add = (a: number, b: number) => number

let addNum: Add

addNum = function (a: number, b: number): number {
  return a + b
}

// Structural Typing
type User = { id: string }
type Product = { id: string }

let user: User = { id: 'user-asfedfk' }
let product: Product = { id: 'product-dklfdj' }

user = product
// product = user

type Point2D = { x: number; y: number }
type Point3D = { x: number; y: number; z: number }

let point2D: Point2D = { x: 0, y: 1 }
let point3D: Point3D = { x: 0, y: 1, z: 2 }

// Extra info
point2D = point3D
function takesPoint2D(point: Point2D) {}
takesPoint2D(point3D)

// Classes

class Animal {
  // private name: string
  protected name: string

  constructor(name: string) {
    this.name = name
  }

  public move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

let cat = new Animal('Cat')

cat.move(10)
// cat.name = "Dog" // Error

class Bird extends Animal {
  fly(distanceInMeters: number) {
    console.log(`${this.name} flew ${distanceInMeters}m.`)
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
let exampleAny: any
let exampleUnknown: unknown

// any
exampleAny = 123
exampleAny = 'Hello'

// unknown
exampleUnknown = 123
exampleUnknown = 'World'

// any
exampleAny.allows.anything.you.can.imagine()
let anySetBool: boolean = exampleAny

// unknown
if (typeof exampleUnknown == 'string') {
  exampleUnknown.trim()
}

if (typeof exampleUnknown == 'boolean') {
  let unknownSetBool: boolean = exampleUnknown
}

// Javascript to TypeScript

function loadString() {
  // ....
}

function loadNumber() {
  // ....
}

let someLegacyVariable: unknown

someLegacyVariable = loadString()
if (typeof someLegacyVariable == 'string') {
  console.log(someLegacyVariable.trim())
}

someLegacyVariable = loadNumber()
if (typeof someLegacyVariable == 'number') {
  console.log(someLegacyVariable.toFixed(2))
}

// Universal Utilities
function logAny(value: unknown) {
  if (typeof value == 'number') {
    console.log(value.toFixed(2))
  } else {
    console.log(value)
  }
}
logAny(123.456)
logAny('Hello world!')

// Type Assertions
function load() {
  return 'Hello'
}

let printHello = load()

const trimmed = (hello as string).trim()
// const trimmed = (<string>hello).trim() <string> will not work in .tsx

// Type Casting

let leet

leet = '1234'

// Use as number
const number = +leet

console.log(number === 1234) // true
console.log(number) // 1234

// Type Declaration
console.log('Logged in user:', process.env.USER)

// Async Await
const delay = (ms: number) => new Promise(res => setTimeout(res, ms))
const mainAsync = async () => {
  await delay(1000)
  console.log('1s')
  await delay(1000)
  console.log('2s')
  await delay(1000)
  console.log('3s')
}

mainAsync()
