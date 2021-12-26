
const o = new Object()
o.firstName = 'Jordan'
o.lastName = 'Hayashi'
o.isTeaching = true
o.greet = function () { console.log('Hello!') }

console.log(JSON.stringify(o))

const o2 = {}
o['firstName'] = 'Jordan'
const key = 'lastName'
o2[key] = 'Hayashi'

const o3 = {
    firstName: 'Jordan',
    lastName: 'Hayashi',
    greet: function () {
        console.log('hi')
    },
    address: {
        street: "Main st.",
        number: '111'
    },
    1: 'ahihi',
}

console.log(JSON.stringify(o3))
console.log(o3.firstName)
console.log(o3.greet)
o3.greet()
console.log(o3["1"])
console.log(o3[1])
