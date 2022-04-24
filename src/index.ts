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
