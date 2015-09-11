// Declaring our module - setter
angular.module('app', []);

// var globalVar = 'global!'
angular.module('app').factory('wonkaFactory', [function(){

	var books = [
		{
			title  : '[] & Gretel',
			year   : 2015,
			author : 'Hansel'
		},
		{
			title  : 'Angular For Dummies',
			year   : 2016,
			author : 'zzDummy Guy'
		},
		{
			title  : 'Jack and Jill - An Illustrated Journey',
			year   : 2011,
			author : 'Adam Sandler'
		}
	]

	return {
		bookList  : books,
		otherProp : 'OTHER PROP'
	}

}])



// Retrieving our module - getter
angular.module('app').controller('trollerController', ['$scope', '$filter', 'wonkaFactory', function($scope, $filter, wonkaFactory){

	console.log('trollin', wonkaFactory)

	$scope.books = wonkaFactory.bookList
	//Grabbing the filter we created by its name
	// var exciter = $filter('excite');
	// // console.log($filter('currency'))

	// $scope.greeting = 'Party';
	// $scope.amIDepressed = true;

	// // Using our filter in our controller vs html
	// $scope.awesomeGreeting = exciter($scope.greeting, false);

}])


angular.module('app').controller('fridayController', ['$scope', 'wonkaFactory', '$timeout', function($scope, wonkaFactory, $timeout){

	console.log('its friday, friday')
	
	$scope.books = wonkaFactory.bookList

	$timeout(function(){
		wonkaFactory.bookList.push({
			title  : 'Alice In Wonderland',
			year   : 1995,
			author : 'Lewis Ccaarrool'
		})
	}, 2000)


	// $scope.greeting = 'Friday!'

}])




// Create custom filter
angular.module('app').filter('excite', function(){

	return function(expression, depress){
		// @params depress Boolean
		if(depress){
			// Add '!!' to the end
			// Uppercase it!
			return expression.toLowerCase() + '... i ges'
		}
		else{
			// if depressed, lowercase
			// Add '... i guess' to the end
			return expression.toUpperCase() + '!!!'
		}
	}
})