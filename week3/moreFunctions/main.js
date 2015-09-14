// doesn't check if we actually received values for a, b, and c.
// var add  = function(a, b, c){
//     console.log(a,b,c)
//     return a + b + c
// }

var add  = function(a, b, c){
    // value of a chained 'or' expression is the value of the first truthy value.
    a = a || 5

    b = b || 10
    c = c || 15
    return a + b + c
}

// if ( 0 ) {
//     console.log('zero')
// }
// else if ( 1 ) {
//     console.log('one')
// }

// this doesn't work. 0 gets replaced with the default value, because 0 is falsey.


// var add  = function(a, b, c){
//     // value of a chained 'or' expression is the value of the first truthy value.
//     if ( a === undefined ) { a = 5 }
//     if ( b === undefined ) { b = 10 }
//     if ( c === undefined ) { c = 15 }

//     return a + b + c
// }
// // console.log(add(5, 10, 0))


// // args is ONE object, with potentially MANY of properties
// var config = function(args) {
//     args.people = args.people || [{name : 'Alice'}, {name : 'Bob'}]
//     return args
// }


// console.log(config({
//     people : [] // an empty array is still truthy. It won't be replaced by the default value.
// }))

// console.log(config({})) // args.people is undefined. It will get replaced with the default array


// angular.module('app', [])
// angular.module('app')



// // overloaded function -  it can perform different behaviors with different inputs
// angular.module = function(moduleName, dependencies){
//     if ( dependencies === undefined ) {
//         getModule('app')
//     }
//     else {
//         setModule(moduleName, dependencies)
//     }
// }


// 1 + 1 // 2 -  addition

// '1' + '1' // '11' - concatenation


var log = function(arg1, arg2){
    // console.log(arguments)
    // console.log(typeof arguments)
    // console.log(arguments[0]) // first argument
    // console.log(arguments[1]) // second argument
    // console.log(arguments.length) // number of arguments
    for ( var i = 0; i < arguments.length; i++ ) {
        console.log(arguments[i])
    }
    // console.log(arguments)
    console.log('push? ', arguments.push)


}


// log('this', ' is', ' a', ' lot', ' of', ' arguments')
// Arrays are just specialized objects
var fakeArray = {
    0 : 'this',
    1 : 'is',
    2 : 'not',
    3 : 'an',
    4 : 'array',
    length : 5
}


// for ( var i = 0; i < fakeArray.length; i++ ) {
//     console.log(fakeArray[i])
// }
// var now = function(){
//     console.log('NOW!')
// }
// // now() // I never actually call the function myself.


// console.log('wait for it...')
// // setTimeout(now, 2000) // I never call now, setTimeout calls it for me.

// var intervalID = setInterval(now, 500)


// setTimeout(function(){
//     clearInterval(intervalID)
// }, 4000)

// var names = [
//     'bob',
//     'carlos',
//     'alice',
//     'dan',
// ]

// sort is a DESTRUCTIVE method, because it modifies the original array (like push and pop).
// in contrast, split is NON-DESTRUCTIVE because it returns a new array instead of modifying the original.
// names.sort()
// console.log(names)

var names = [
    {name :'bob bobberson', age : 12},
    {name :'barlos bobsmith', age : 42},
    {name :'alice bobbins', age : 22},
    {name :'dan b', age : 106.5},
]

// names.sort(function(argA, argB){
//     if ( argA.name > argB.name ) {
//         // if a sort function returns a positive number, then argA should be sorted before argB
//         return -1
//     }
//     else if ( argA.name < argB.name ) {
//         return 1
//     }
//     else if ( argA.name === argB.name ) {
//         return 0
//     }
// })
// console.log(names)

names.sort(function(argA, argB){
    var BinA = 0
    var BinB = 0
    for ( var i = 0; i < argA.name.length; i++ ) {
        if ( argA.name[i] === 'b' ) {
            BinA++
        }
    }
    for ( var i = 0; i < argB.name.length; i++ ) {
        if ( argB.name[i] === 'b' ) {
            BinB++
        }
    }

    if ( !(BinA === BinB) ) {
        return BinA - BinB
    }
    else {
        return argA.age - argB.age
    }
})

// console.log(names)


// an example of variable hiding
// setTimeout(function(){
//     var foo = 'first'
//     console.log(foo)

//     setTimeout(function(){
//         var foo = 'second'
//         console.log(foo)

//         setTimeout(function(){

//             // var foo = 'third'
//             console.log(foo)

//         },2000)
//     },2000)
// },2000)

var myArray
var add = function(a,b){
    // local variables defined inside of a function cease to exist after the function finishes. This is called garbage collection.
    var temp = {val: a + b}
    return temp
}

// console.log(add(2,3))

// at this point, output no longer exists.
// console.log(output)


var counterConstructor = function(){
    var start = 0

    // javascript will not garbage collect start because the counter function depends on it. the counter function has CLOSURE over the start variable.
    var counter = function(){
        console.log(start++)
    }
    return counter
}

var myCounter = counterConstructor()
var yourCounter = counterConstructor()
// console.log(start) // start is not defined
// myCounter()
// myCounter()
// myCounter()
// myCounter()
// yourCounter()
// yourCounter()
// myCounter()
// yourCounter()
// myCounter()
// yourCounter()
console.log(myCounter)