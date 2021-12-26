const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key',
    },
}

const o2 = o

o2.a = 'new value'

// o and o2 reference the same object
console.log(o.a)

// this shallow-copies o into o3
const o3 = Object.assign({}, o)

// o3.a = 'new a'

// console.log(o.a)
// console.log(o3.a)

// o3.obj.key = 'new key'

// console.log(o3.obj.key)
// console.log(o.obj.key)

// deep copy
function deepCopy(obj) {
    // check if vals are objects
    // if so, copy that object (deep copy)
    // else return the value
    const keys = Object.keys(obj)

    const newObject = {}

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }

    return newObject
}

const o4 = deepCopy(o)

o.obj.key = 'new key!'
console.log(o4.obj.key)

console.log(o)
console.log(o4)
