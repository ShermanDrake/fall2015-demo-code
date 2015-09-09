// Setting up the module
angular.module('breakoutModule', []);

// Getting the module
angular.module('breakoutModule');

// Setting Controller
angular.module('breakoutModule')
	.controller('mainController', ['$scope', '$timeout', function($scope, $timeout){
		
		console.log('this is da controller');
		
		$scope.userName = 'Horatio Hornblower';
		$scope.appName = 'Black Rhino Hunters Anonymous';

		$scope.titleClick = function(event){
			console.log('!!!', event.target)
			$scope.userName += '!'
		}

		$scope.showRhino = function(){
			console.log($scope.appName)
		}

		$timeout(function(){
			$scope.appName = 'Driveway'
		}, 2000);


	}])










angular.module('breakoutModule')
	.controller('otherController', ['$scope', function($scope){
		
	}])


// var myObj = {
// 	name : {
// 		firstName : 'bill'
// 		lastName : 'kksksks'
// 	}
// }

// myObj.name.firstName

// var something = (10 < 11) ? 'alright!' : 'Noooo'