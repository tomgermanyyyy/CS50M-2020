// "var" is lexically scoped, meaning it exists from time of declaration to end of func
if (true) {
    var lexicallyScoped = 'This exists until the end of the function'
}

console.log(lexicallyScoped)

// "let" and "const" are block scoped
if (true) {
    let blockScoped = 'This exists until the next }'
    const alsoBlockScoped = 'As does this'
}

// this variable doesn't exist
console.log(typeof blockScoped)

// this creates a global variable
thisIsAlsoAVariable = "hello"

const thisIsAConst = 50

// thisIsAConst++ // error!

const constObj = {}

// const are still mutable
constObj.a = 'a'

// const constObj = {} // error!
// constObj = {} // error!

let thisIsALet = 51
thisIsALet = 50

// let thisIsALet = 51 // error!

var thisIsAVar = 50
thisIsAVar = 51
var thisIsAVar = 'new value!'