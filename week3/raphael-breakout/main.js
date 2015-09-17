var app = {
    count : 0,
}
var setListener = function(){
    document.getElementById('greeting').addEventListener('click', function(){
        console.log(app.count++)
    })
}

setListener()


// this function does not count, but it creates functions that DO count
counterConstructor = function(){
    var count = 0
    var counter = function(){
        console.log(count++)
    }

    return counter
}


var myCounter = counterConstructor()

// our counter needs to know the value of count in order to do it's job, so javascript refrains from garbage-collecting count.
// myCounter()
// myCounter()
// myCounter()
// myCounter()


//this creates a second count variable for our second counter
var yourCounter = counterConstructor()
// yourCounter()
// yourCounter()
// yourCounter()
// yourCounter()



// var usefulFunctionConstructor = function(){

//     var mapCallback = function(element){
//         return element + 1
//     }

//     var localUsefulFunction = function(inputArray){
//         inputArray.map(mapCallback)
//     }
//     return localUsefulFunction
// }

// var globalUsefulFunction = usefulFunctionConstructor()


// var oldArray = [1,2,3]
// console.log(mapCallback)
// // usefulFunction is accessible, but map callback is not.
// // usefulFunction has CLOSURE over map callback.
// var newArray = globalUsefulFunction(oldArray) 


var unique = function(namesArray){
    var namesObj = {}
    namesArray.forEach(function(element){
        namesObj[element] = element
    })
    // console.log(namesObj)
    var output = []
    // this creates a variable called key. be sure to use var!
    for ( var key in namesObj ) {
        output.push(key)
    }
    return output
}


// console.log(unique(['todd', 'avery', 'maria', 'avery']))



// all fives are the same.
// 5 ===5
// true
// a === b
// true
// 'hi'
// "hi"
// var a = 'hi'
// undefined
// var b = 'hi'
// undefined
// var a = {}
// undefined
// var b = {}
// undefined
// a == b
// false
// every array is unique!
// var x = []
// undefined
// var y = []
// undefined
// x === y
// false
// var myArray = []
// undefined
// var yourArray = myArray
// undefined
// myArray === yourArray
// true

var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

// var studentNames = students.map(function(element){
//     return element.name
// })

// console.log(studentNames)

var studentsWhoCanDrink = students.filter(function(student){
    return student.age >= 21
}).map(function(student){
    return student.name
}).map(function(student){
    return student.toUpperCase()
})


// var studentsWhoCanDrink = students.filter(function(student){
//     return student.age >= 21
// })

// studentStringsArray = studentsWhoCanDrink.map(function(student){
//     return student.name
// })

// upperCaseNames = studentStringsArray.map(function(student){
//     return student.toUpperCase()
// })

// console.log(studentsWhoCanDrink)

var methodConstructor = function(){
    var myObj = {}
    myObj.greet = function(){ console.log('hello world')}
    return myObj
}

var greeter = methodConstructor()

// greeter.greet()



var greet = function(){
    console.log('hello world')
}

// It's a bad practice to overwrite/extend built-in prototypes
// Array.prototype.isArray = function(){
//     return this.constructor === Array
// }

// Array.prototype.isArray = function(){
//     return false
// }


// gets a random number between 0 and 1
// console.log(Math.random())

// console.log(Math.ceil(Math.random()*10))

var names = ['Alice', 'Bob', 'Carlos', 'Dan']
var liz = {
 name: 'Liz',
 age: 25,
 city: 'Boulder'
}

// pick a random name from the names array
// console.log(names[Math.floor(Math.random()*names.length)])

// this is an example of a polymorphic/overloaded function. 
var logger = function(input){
    if ( input.constructor === Array ) {
        for ( var i = 0; i < input.length; i++ ) {
            console.log(input[i])
        }
    }
    else if ( input.constructor === Object ) {
        for ( var key in input ) {
            console.log(key, input[key])
        }
    }
}

logger(names)
logger(liz)