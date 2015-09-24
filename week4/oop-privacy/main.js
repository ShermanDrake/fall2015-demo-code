// Namespacing
//	- Encapsulate methods and variables
//		Eliminates global variables
//			- Maybe more than one developer on a project - don't want
//			  variable names to collide
//
//
// angular.module('someApp', [])
//
// _.sort()
// _.find()
// _.chain()
// _.flatten()
//
// _(myArray).find
// Iguana.howMany()
// Iguana.count
// new Iguana()
//
//
//
//
//
//
//
// 

// Our amazing library

// var helloLibrary = {
// 	numberHellos : 0,
// 	sayHi : function(){
// 		console.log('hi')
// 		this.numberHellos++
// 	},
// 	yellHi : function(){
// 		console.log('HI!')
// 		this.numberHellos++
// 	},
// 	dontCallMe : function(){
// 		// WHY WOULD WE DO THIS?!  THEY'RE GOING TO CALL IT ANYWAY!
// 	}
// }

// // var numberHellos = 0
// // var sayHi = function(){
// // 	console.log('hi')
// // 	numberHellos++
// // }

// // var yellHi = function(){
// // 	console.log('HI!')
// // 	numberHellos++
// // }
// /*=====================*/
// // My own code
// // sayHi()
// // sayHi()
// // yellHi()
// // yellHi()
// // console.log(numberHellos)
// helloLibrary.sayHi()
// helloLibrary.yellHi()
// console.log(helloLibrary.numberHellos)

// var sayHi = function(){
// 	console.log('this is my own... Hi!')
// }
// sayHi()


// Privacy

// Takes advantage of closure to hide variables / methods

// var myFunc = function(){
// 	var something = 'hello!'
	// We are returning a function from myFunc
	// This returned function has a reference to the variable 'something'
	// so 'something' does not get garbage collected like it normally would
// 	return function(){
// 		return something
// 	}
// }

// var newFunc = myFunc()

// ------------ \\
// This IIFE lowers our global namespace footprint even further, no longer
// have personSetUp as a variable name in the global namespace

var makeAPerson = (function(){
	var people = []
	
	var Person = function(firstName, lastName, profession){
		this.firstName = firstName;
		this.lastName = lastName;
		this.profession = profession;
		people.push(this)
	}
	
	// Attaching to the Constructor instead of prototype
	// because the method is more concerned with all 'Person's
	// rather than individual 'Person' instances
	// Static Method
	Person.listPeople = function(){
		return people
	}
	// Static Property
	// Person.listPeople = people

	// Create Info is a PRIVATE method, there is no way to access it
	// outside of this function
	var createInfo = function(person){
		return person.firstName + ' is a very talented ' + person.profession + '.'
	}

	Person.prototype.whoDat = function(){
		return createInfo(this)

		// this would refer to hansel or whatever host object the method is being called on
		// hansel.whoDat()
	}

	return Person
	// Revealing Module Patter
	// return {
	// 	Person : Person,
	// 	people : people
	// }
})()

// var IIFE = (function(dog){
// 	return dog
// })('Doberman')


// -------------\\


// ----- Our Own Code ----\\
// var makeAPerson = PersonSetUp()
var hansel = new makeAPerson('Hansel', '[]', 'Professional Turtle Rider')
var gretel = new makeAPerson('Gretel', '{}', 'Crumb Droppah')

// var makeAnotherPerson = PersonSetUp()
// var hansel2 = new makeAnotherPerson('Hansel2', '[]', 'Semi-Pro Evil Bunny Rider')
// var gretel2 = new makeAnotherPerson('Gretel2', '{}', 'Stick Picker-Upper')

var someGuy = new makeAPerson('Some', 'Guy', 'Does Stuff')
var thePeople = makeAPerson.listPeople()

