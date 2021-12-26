let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2

let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana

fruits.forEach(function (item, index, array) {
    console.log(item, index)
})
// Apple 0
// Banana 1

let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
console.log(newLength)
console.log(fruits)

last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]
console.log(last)
console.log(fruits)

first = fruits.shift()  // remove Apple from the front
// ["Banana"]
console.log(first)
console.log(fruits)

newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]
console.log(newLength)
console.log(fruits)

fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')  // 1
console.log(pos)
console.log(fruits)

let removedItem = fruits.splice(pos, 1)  // this is how to remove an item
// ["Strawberry", "Mango"]
console.log(fruits)