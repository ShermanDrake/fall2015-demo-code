
// var words = ['this', 'is', 'a', 'string']
// var capOneWord = function(oneWord){
//     return oneWord.toUppercase()

// }
// var capWords = function(wordsArray){
//     var output = []
//     for ( var i=0; i<wordsArray.length; i++ ){
//         output[i] = capOneWord(wordsArray[i])
//     }
//     return output
// }

// // we've broken this function down into two pieces.
// var capitalizedWords = capWords(words) // If a function has no side effects, and you call it without assigning it to another variable, then that function had no effect on the state of your program. 




// var words = ['this', 'is', 'a', 'string']
// var capOneWord = function(oneWord){
//     return oneWord.toUpperCase()

// }
// var capWords = function(wordsArray){
//     var output = []
//     // forEach is a built-in javascript method on all arrays
//     var forEachCallback = function(element){
//         output.push(capOneWord(element))
//     }
//     wordsArray.forEach(forEachCallback)
//     return output
// }

// var capitalizedWords = capWords(words) // If a 
// console.log(capitalizedWords)



// var words = ['this', 'is', 'a', 'string']


// var capWords = function(wordsArray){
//     var output = wordsArray.map(function(element, index, array){
//         console.log('element: ', element)
//         console.log('new element: ', element.toUpperCase())
//         console.log('=-=-=-=-=-=-=-=-=-=')
//         return element.toUpperCase()
//     })

//     return output
// }

// var capitalizedWords = capWords(words) // If a 
// console.log(capitalizedWords)


var people = [
    'Alice Bobbits',
    'Bob Baggins',
    'Carlos Carlyle',
    'Dan Blathers'
]

var clubMembers = people.filter(function(element, index, array){
    var howManyB = 0
    for ( var i = 0; i < element.length; i++ ){
        if ( element[i].toLowerCase() === 'b' ) {
            // howManyB++
            // howManyB += 1
            howManyB = howManyB + 1 
        }
    }
    if ( howManyB > 1 ) { return true } // this person is in the club
    else { return false } // this person is filtered out
})

// console.log(clubMembers)


var numbers = [7, 5, 14, 420, 12]

var sum = numbers.reduce(function(runningTotal, currentValue, index, arr){
    // console.log(index)
    // console.log(arr)
    // console.log('running total :', runningTotal)
    // console.log('current value:', currentValue)
    // console.log('=-=-=-==-=-=-=-=-=-=-=-=-=')

    return runningTotal + currentValue
},1000)


// console.log('sum: ', sum)


var letters = ['h','e','l','l','o']


var hello = letters.reduce(function(runningTotal, currentValue, index){
    // if ( index < 2 ) {
    //     return runningTotal
    // }
    // else {
        console.log('running total :', runningTotal)
        console.log('current value:', currentValue)
        return runningTotal + currentValue
    // }
}, 'I would like to say ')

console.log(hello)