// Higher Order Functions take funcs as args or return funcs
function map(arr, fn) {
    const newArr = []

    // for (let i = 0; i < arr.length; i++) {
    //     newArr.push(fn(arr[i]))
    // }

    arr.forEach(function (val) {
        newArr.push(fn(val))
    })

    return newArr
}

function addOne(num) { return num + 1 }

const x = [0, 1, 2, 3]

console.log('Map:')
console.log(map(x, addOne))
console.log(map(x, addOne).join('|'))
console.log('----------------------')

function filter(arr, fn) {
    const newArr = []
    arr.forEach(val => {
        if (fn(val)) newArr.push(val)
    })

    return newArr
}

function isGreaterThanOne(val) { return val > 1 }

console.log('Filter:')
console.log(filter(x, isGreaterThanOne))
console.log('----------------------')

function reduce(arr, fn, initialVal) {
    let returnVal = initialVal

    arr.forEach(val => {
        returnVal = fn(returnVal, val)
    })

    return returnVal
}

function add(x, y) { return x + y }

console.log(x.map(addOne))
console.log(x.filter(isGreaterThanOne))
console.log(x.reduce(add))