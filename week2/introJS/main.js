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

// var canDrink

// // var age = prompt("How old are you?") //takes user input, as a string.
// // console.log(typeof age) // it's a string!
// var country = 'mexico'

// if ( +age >= 21 ) {
//     canDrink = true
// }
// else if ( (( country === 'Mexico' ) || country === 'mexico') && ( +age >= 18 ) ) {
//     canDrink = true
// }
// else {
//     canDrink = false
// }


// console.log('Will you be served? ' + canDrink)

// console.log( ( true + true + true ) * ( true + true ) * false) // booleans can coerce to 0 and 1


// array literal
var myArray = []
// there are seven ELEMENTS in the days array.
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


// console.log(days.length)

// console.log(days[0])


var greeting = 'hello'
greeting[0] = 'H' // this doesn't do anything, because strings are IMMUTABLE.

days[0] = 'Mondaaaaaaaaaaayyyyyy..........'
// console.log(days[0])


days.push('RaphaelDay') // push adds this value to the end of the array
// console.log(days)

// var whatDidWeRemove = days.pop()
// days.pop()
// days.pop()
// days.pop()
// days.pop()
// days.pop()
// console.log(whatDidWeRemove)

// console.log(days)

var start = 0
start++
start = start + 1 // exactly the same as the above line
start += 1 // also the same as the above line
start *= 2 
// console.log(start)

// the variable i is an integer, NOT a string
// for ( var i = 0; i < days.length; i++ ) {

//     if ( days[i] === 'Saturday' ) {
//         alert('Party!')
//     }
//     else if ( days[i] === 'Sunday' ) {
//         alert('Take a nap...')
//     }
//     else {
//         alert('work work work...')
//     }

// }


var myObj = {}

var topGun = {
    rating : 6.8,
    genre  : 'Historical autobiography',
    title  : 'Top Gun',
    year   : 1986,
}


// console.log(topGun['genre'])

// for ( var key in topGun ) {
//     console.log('The ' + key + ' of the movie is ' + topGun[key])
// }

// var which = prompt('Which property do you want to know about?')

// console.log(topGun[which])

var meanGirls = {
    rating : 'fetch',
    genre  : 'inspirational documentary',
    year   : "he doesn't even go here.",
    title  : "Mean Girls",
}

topGun.rating = 6.9

// console.log(topGun)

var movies = []
movies.push(topGun)
movies.push(meanGirls)
console.log(movies)

