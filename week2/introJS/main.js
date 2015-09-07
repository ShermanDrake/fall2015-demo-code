'use strict'
// Number literals
42
0

1.000001
-20

// console.log(-20)

// console.log(5 + 7) // + operator

// console.log(10 % 3) 

// console.log(typeof 10) // typeof tells you what type a value is.

// var result = 10 / 3

// console.log(result) // this is not a LITERAL number

'hello'
"hello"
'hi'
"A witty saying proves nothing."
'I can\'t let you do that.' // backslash ESCAPES the apostrophe, letting javascript know it's just a regular character.
// console.log('\n\n')

// console.log(typeof (typeof 10)) // typeof always reports values as a string

var greeting = 'hello ' + 'world'
// console.log(greeting)
var eleven = '1' + '1'
// console.log(eleven)
var math = "1 + 1"
// console.log(math)

var coercion = 1 + '1' // coerces the number into a string to perform concatenation. Javascript will not coerce strings into numbers.
// console.log(coercion)

// console.log(greeting)
// console.log(greeting.length) // dot-notation used to access a property by name

var hiLen = 'hello'.length
// console.log(typeof hiLen)
// console.log('hello'.length) // this works, but you don't usually access properties off of literal values, only from variable references.

// console.log(greeting[1]) // bracket notation


// console.log(greeting[greeting.length - 1])

// console.log(typeof +'cat')

// these are the only boolean literals in javascript
true
false

// console.log(!!!!!!!!!!true)

// console.log( !(10 < 3) ) // greater than takes 2 numbers, produces a boolean

// console.log('cat' <= 'dog')


// console.log(10 === 10) // STRICT equality

// console.log(10 == 10) // coercive equality


// console.log('10' === 10) // false

// console.log('10' ==  10) // true

// console.log(null == undefined) // most developers don't understand what this does.


// if ( false ) {
//     console.log("it's true!") 
// }

var canDrink

var age = prompt("How old are you?") //takes user input, as a string.
// console.log(typeof age) // it's a string!
var country = 'mexico'

if ( +age >= 21 ) {
    canDrink = true
}
else if ( (( country === 'Mexico' ) || country === 'mexico') && ( +age >= 18 ) ) {
    canDrink = true
}
else {
    canDrink = false
}


console.log('Will you be served? ' + canDrink)

console.log( ( true + true + true ) * ( true + true ) * false) // booleans can coerce to 0 and 1
