let a = [1, 2, 3, 4, 5]
let b = [...a]
b[4] = 6
b.push(7)
console.log(a)
console.log(b)