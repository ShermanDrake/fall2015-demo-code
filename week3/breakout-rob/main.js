angular.module('humpModule', []);

angular.module('humpModule')
	.controller('mindController', ['$scope', '$interval', function($scope, $interval){

		// console.log('mind control...')
		// // $scope.greeting = 'I control your mind'
		// $scope.checkGreeting = function(){
		// 	console.log('Greeting : ', $scope.greeting)
		// }

		// $scope.changeGreeting = function(){
		// 	// Delay the update of greeting until our input
		// 	// modeling $scope.greetingInput is blurred
		// 	$scope.greeting = $scope.greetingInput
		// }
		// $scope.user = {
		// 	name 				: 'Shelley',
		// 	tin  				: '382-12-7863',
		// 	favoriteAnimal		: 'Turtle',
		// 	firstCarColor		: 'Green',
		// 	mothersMaidenName	: 'Tortuga',
		// 	highschoolMascot	: 'Snapping Turtle'
		// }

		// // Angular creates this for us when we ng-model it
		// // $scope.editUser = {
		// // 	name : '',
		// // 	tin : '',
		// // 	favoriteAnimal : '',
		// // 	firstCarColor : '',
		// // 	mothersMaidenName : '',
		// // 	highschoolMascot : ''
		// // }

		// $scope.submitProfile = function(){
		// 	// console.log($scope.editUser)
		// 	// $scope.user.name = $scope.editUser.name
		// 	// $scope.user.tin = $scope.editUser.tin
		// 	// $scope.user.favoriteAnimal = $scope.editUser.favoriteAnimal
		// 	// VS *ring ring*
		// 	for(key in $scope.editUser){
		// 		// console.log(key)
		// 		// undefined || '123' && true || 0
		// 		// console.log( $scope.editUser[key] )
		// 		$scope.user[key] = $scope.editUser[key] || $scope.user[key]
		// 		$scope.editUser[key] = ''
		// 	}
		// }





		$scope.beachToys = [

			{
				name   : 'Boogie Board',
				colors : [
					'purple',
					'cornmeal blue',
					'toast'
				]
			},
			{
				name   : 'Sand',
				colors : [
					'white',
					'yellow',
					'dark-brown',
					'black',
					'beige',
					'blue'

				]
			},
			{
				name   : 'Frisbee',
				colors : [
					'peach',
					'rainbow',
					'tie-dye',
					'radical',
					'deadhead'
				]
			}

		]

		$scope.getDatColor = function(colorIndex, toyIndex){

			// console.log('Color : ', colorIndex)
			// console.log('Toy : ', toyIndex)

			// console.log( $scope.beachToys[toyIndex].name + ' - ' + $scope.beachToys[toyIndex].colors[colorIndex] )

			// $scope.beachToys[toyIndex].name = 'BOUGHT!'
			$scope.beachToys[toyIndex].colors[colorIndex] = 'BOUGHT!'
		}

		$scope.changeBackground = function(colorIndex, toyIndex){

			$scope.beachToys.forEach(function(toy){
				toy.selected = false
			});

			$scope.beachToys[toyIndex].selected = true
		}


}])