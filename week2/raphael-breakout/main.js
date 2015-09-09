
// How do I declare an object literal?
// objects always have key-value pairs
var myObj = {
    name : 'Alice',
    Age  : 12,
}
myObj['age']
myObj.age

// var whichProperty = prompt('Which property \n do we want?', 'a new string')

// myObj[whichProperty]
// myObj.whichProperty // this is NOT the same as the line above

// Arrays have numbered indexes
var myArray = [
    'Dan',
    'Alice',
    'Carlos',
    'Bob',
]
// myArray[1]

document.getElementById('theInput').focus()

// console.log(myInput.value)

// for ( var i = 0; i < myArray.length; i++ ) {
//     if ( myArray[i] === 'Bob' ) {
//         myArray[i] = myArray[i].toUpperCase()
//     }
// }
// myArray[1] = myArray[1].toUpperCase()
var whereIsBob = function(){
    for ( var i = 0; i < myArray.length; i++ ) {
        console.log('i ', i)
        if ( myArray[i] === 'Bob' ) {
            return i
        }
    }
}

var changeHandler = function(){
    var val = document.getElementById('mySelect').value
    console.log(val)
}
// console.log(whereIsBob())
// example of a callback function
document.getElementById('mySelect').addEventListener('change', changeHandler)

// for ( var i = -5; i < 5; i++ ) {
//     console.log(i)
//     if ( !isFinite(10 / i) ) {
//         console.log(i, 'math!')
//     }
// }
var allWords = ['cat', 'red', 'zebra', 'otter', 'duck', 'arm']

var get3LetterWords = function(wordArray) {
    var output = []
    for ( var i = 0; i < allWords.length; i++ ) {
        if ( allWords[i].length === 3 ) {
            output.push(allWords[i])
        }
    }

    return output
}

// var the3LetterWords = get3LetterWords(allWords)
// console.log(the3LetterWords)

// var filteredWords = allWords.filter(function(element){
//     if ( element.length === 3 ) {
//         return true
//     }
//     else {
//         return false
//     }
// })

// var spreadsheet = [
//     [1,2,3],
//     [10,20,30],
//     ['a','b','c'],
// ]

// var groceryList = ['milk', 'eggs', 'bacon']
// var clothesList = ['shirt', 'hat', 'gloves']
// var tasks = [groceryList, clothesList]


// tasks[0][1][0]

// //HUUUUGE object, but at least there's only one global variable this way.
// var app = {
//     stuff : {
//         things : [
//             1,
//             2,
//             3,
//         ]
//     },
//     moreStuff : someHugeArray
// }
// app['stuff']['things'][1]
// app.stuff.things[1]

var countDown = function(number) {
    console.log(number)
    // this is the base-case, which tells us when to stop.
    if ( number > 0 ) {
        countDown(number - 1)
    }
}

countDown(10)
