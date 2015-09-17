// console.log(_)
// angular.module()

//--- MAP method ---\\
var myArray = [1, 7, 15, 2]

var result = myArray.map(function(el){
	// console.log(el)
	// myArray[i]
	return el * 2
})

// console.log(myArray)
// console.log(result)

var underscoreResult = _.map(myArray, function(el){
	return el * 2
})

// console.log(underscoreResult)



//--- Reduce ---\\

// Start: "Read the F'in Documentation"

// Goal : 'R.T.F.D.'

// var myString = "Read the F'in Documentation"

// var reduceResult = _.reduce(
// 	myString.split(' '),
// 	function(acronymSoFar, word){
// 		// console.log(word, acronymSoFar)
// 		return acronymSoFar + word[0].toUpperCase() + '.'
// 	},
// 	''
// 	)



//--- Find ---\\
_.find



// GOAL - find the first tuber that is purple

// var foundTuber = _.filter(tubers, function(currentTuber){
// 	return currentTuber.color.toLowerCase() === 'purple'
// })

// console.log(foundTuber)

//--- Pluck ---\\

// console.log( _.pluck(tubers, 'color') )

//--- Uniq ---\\

// _.uniq( _.pluck(tubers, 'color') )


// //--- Chain ---\\

// var chainResult = _.chain(tubers)
// 	.pluck('color')
// 	.uniq()
// 	.value()

// console.log(chainResult)


var tubers = [
	{
		name   : 'Sweet Potatoes',
		colors : ['Orange', 'Navajowhite', 'Purple', 'Burlywood']
	},
	{
		name   : 'Peruvian Blue Potatoes',
		colors : ['Purple', 'Burlywood', 'Red', "Peruvian Blue"]
	},
	{
		name   : 'Purple Fingerling Potatoes',
		colors : ['Purple', 'Black', 'Hammock', 'Goldenrod']
	}
]

// GOAL - create an array of all the unique colors

// [1,2,3] === [1,2,3]
// {name : 'Bob'} === {name : 'Bob'}

// var user = {name : 'Bob'}
// var user2 = {name : 'Bob'}


// 'Dog' === 'Dog'
_.chain(tubers)
	.pluck('colors')
	.flatten()
	.uniq()
	.value()

