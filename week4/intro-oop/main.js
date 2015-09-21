// Object Oriented Programming
//   - Programming paradigm based on the creation of objects
//	 - Methods, Properties, key:value pairs

// Free floating variables... bad!
// var name
// var name2
// var name3

// {
// 	name : 'Bill'
// }
// {
// 	name : 'Franklin'
// }


// Constructors - functions that define our data format
//				- Properties and methods
//				- Can be thought of as blueprints

// Class - We define constructor functions for our classes

// Instances - Manifesting a blueprint with actual data


// name
// age
// bulgyEyes
// color
// length
// weight
// tailDetachability
// sexualOrientation
// genderIdentity


// var Iguana = function(name, color, bulgyEyes, tubbiness){
// 	// Under the hood
// 	// var this = {}

// 	this.name = name;
// 	this.color = color;
// 	this.bulgyEyes = bulgyEyes;
// 	this.tubbiness = tubbiness;
// 	this.eat = function(){
// 		// console.log(this)
// 		console.log(this.name + ' is eating. Om nom nom...');
// 	}

// 	// Under the hood
// 	// return undefined

// 	// With 'new' keyword
// 	// return this
// }

// // var myArray = [1,2,3]
// // myArray.join()

// var chubchub = new Iguana('ChubChub', 'Aquamarine', true, true)
// // console.log(myIguana);
// var herbert = new Iguana('Herbert', 'Brown', false, true)



// var myFunc = function(){
// 	return this // window object!
// }

// console.log( myFunc() )


// IN CLASS CHALLENGE!
// 1.Create a Quote class and constructor function
// 
// 		2 properties
//			-Text
// 			-Author

// 2. Create an instance of the Quote class and store in a variable
// 3. Console log the value of the instance
// BONUS : have default values if text/author are not passed in

// var Quote = function(quoteText, quoteAuthor){

// 	this.text = quoteText || 'This is so empty...';
// 	this.author = quoteAuthor || 'Anonymous';
// }

// var greatQuote = new Quote('Bangarang', 'Rufio')
// console.log(greatQuote)

// var notSoGreatQuote = new Quote('')
// console.log(notSoGreatQuote)


var Iguana = function(name, color, bulgyEyes, tubbiness){
	this.name = name;
	this.color = color;
	this.bulgyEyes = bulgyEyes;
	this.tubbiness = tubbiness;
	// this.eat = function(){
	// 	console.log(this.name + ' is eating. Om nom nom...');
	// }

	Iguana.count = Iguana.count || 0
	Iguana.count++
}
Iguana.howMany = function(){
	console.log(this.count)
}

var chubchub = new Iguana('ChubChub', 'Aquamarine', true, true)
var herbert = new Iguana('Herbert', 'Brown', false, true)

Iguana.prototype.eat = function(){
	console.log(this.name + ' is eating.  yummy')
}




// CHALLENGE

// 1. Update Quote class to have 2 methods on its prototype
//		a. method to count the number of words in the quote
//		b. method to console log an uppercased version of the quote with exclamation points



var Quote = function(quoteText, quoteAuthor){

	this.text = quoteText || 'This is so empty...';
	this.author = quoteAuthor || 'Anonymous';
}

var greatQuote = new Quote('Bangarang', 'Rufio')
console.log(greatQuote)

var notSoGreatQuote = new Quote('')
console.log(notSoGreatQuote)


Quote.prototype.countWords = function(){
	console.log( this.text.split(' ').length )
}

Quote.prototype.yell = function(){
	console.log( this.text.toUpperCase() + '!!!!!' )
}

var bestQuote = new Quote('More more more', 'Billy Idol')

