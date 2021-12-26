const sayHello = (function () {
    const message = 'Hello!'

    function sayHello() {
        console.log(message)
    }

    return sayHello
})()

//console.log(sayHello.toString())

sayHello()

function makeFunctionArray() {
    const arr = []

    for (var i = 0; i < 5; i++) {
        arr.push((function (x) {
            return function () { console.log(x) }
        })(i))
    }

    return arr
}

const functionArr = makeFunctionArray()

functionArr[0]()
