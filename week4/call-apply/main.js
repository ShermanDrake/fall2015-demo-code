// var whatsMyName = function(){
//     console.log('My name is ' + this.name + '.')
// }

var whatsMyName = function(excited, secondArg, thirdArg, fourthArg){
    // var ending = excited ? '!!' : '.'
    if ( excited ) {
        var ending = '!!'
    }
    else {
        var ending = '.'
    }
    console.log('My name is ' + this.name + ending)
}


// whatsMyName()

var alice = {
    name : 'Alice',
}

// alice.greet()

// call whatsMyName, using the alice object as the context, i.e. the value for 'this'
// arguments for the original function are offset by one, because the first argument is the context. The second argument is the first parameter for the original function.
// whatsMyName.call(alice, true, 'secondArg', 'thirdArg', 'fourthArg')

// var mapper = function(){
//     console.log(arguments.map)
//     var biggerArgs = [].map.call(arguments, function(element){
//         return element * 10
//     })
//     console.log(biggerArgs)
// }

// mapper(1,2,3)

// var HELLO = [].map.call('hello', function(element){
//     return element.toUpperCase()
// }).join('')

// console.log(HELLO)

// whatsMyName.apply(alice, [true, 'secondArg', 'thirdArg', 'fourthArg'])
// var myNumbers = [1, 20, -4, 10000, Math.PI]
// console.log(Math.max(myNumbers))

// This is terrible. Don't do it.
// console.log(Math.max(myNumbers[0], myNumbers[1], myNumbers[2]))

// console.log(Math.max.apply(null, myNumbers))

var myMapCallback = function(element){
    return element.toUpperCase()
}
var myCustomMap = function(callback){
    var output = []
    for ( var i = 0; i < this.length; i++ ) {
        output[i] = callback(this[i])
    }
    return output
}

// var HELLO = myCustomMap.call('hello', myMapCallback).join('')
// console.log(HELLO)

var bob = {
    name : 'Bob'
}

// bind returns a new function
// bobSaysHi is exactly the same as whatsMyName, but all references to 'this' are replaced with bob
// var bobSaysHi = whatsMyName.bind(bob)

// // pass in arguments as usual. A bound function call looks similar to a normal function call.
// bobSaysHi(true, 'second', 'third', 'fourth')


// var carlos = {
//     name : 'Carlos'
// }


// var carlosIsHappyToMeetYou = whatsMyName.bind(carlos, true)

// carlosIsHappyToMeetYou(false)


// need to find out which version of getUserMedia the user has, but we don't want to lose navigator as the context.
// getUserMedia     = navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.getUserMedia;
// if ( getUserMedia ) {
//     // console.log('get user media is supported')
//     getUserMedia = getUserMedia.bind(navigator);
// }
// else {
//     console.log('get user media is not supported');
// }



var people = [
   {
    name : 'Alice',
    age  : 43,
   },
   {
    name : 'Bob',
    age  : 12,
   },
   {
    name : 'Carlos',
    age  : 80
   },
   {
    name : 'Dan',
    age  : 2
   }
]
// return a positive number: a is before b
// return a negative number: b is before a
// return 0: equal sort order
// sort by age
// people.sort(function(a, b){
//     return a.age - b.age
// })
// sort does not return
output = people.slice().sort(function(a, b){
    if ( a.name === 'Alice' ) { return -1 }
    if ( b.name === 'Alice' ) { return 1 }
    return a.age - b.age
})

var myArray = [1,2,3]
var otherArray = myArray.slice()