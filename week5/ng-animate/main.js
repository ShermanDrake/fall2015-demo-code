angular.module('Animodule', ['ngAnimate']);

angular.module('Animodule')
	.controller('controllimations', ['$scope','$timeout', function($scope, $timeout){

		// console.log('Hello');
		$scope.noodles = []
		
		$timeout(function(){
			$scope.noodles = [
			{
				type : 'Rice Noodle'
			},
			{
				type : 'Udon Noodle'
			},
			{
				type : 'Pool Noodle'
			},
			{
				type : 'Loose Noodle'
			},
			{
				type : 'Wet Noodle'
			},
			{
				type : 'Drunken Noodle'
			},
			{
				type : 'K`Noodle'
			},
			{
				type : 'Cup Noodle'
			}
		]
		}, 50)
		

		$scope.byeByeNoodle = function(index){
			console.log(index)
			// ng-hide
			// $scope.noodles[index].byebye = true

			// ng-repeat
			$scope.noodles.splice(index, 1)
		}
		$scope.instantNoodles = function(){
			// ng-show / ng-hide
			// $scope.noodles.forEach(function(noodle){
			// 	noodle.byebye = true
			// })

			// ng-repeat
			$scope.noodles.push({
				type : 'Ramen Noodle'
			})

		}

	}])













