angular.module('radApp', ['ngAnimate']);

angular.module('radApp')
	.factory('radFactory', function(){

		var beerList = []
		// @param name    String
		// @param style   String
		// @param hops    Array
		// @param grains  Array
		// @param IBU     Number
		// @param ABV     Number
		var Beer = function(name, style, hops, grains, IBU, ABV){
			this.name   = name;
			this.style  = style;
			this.hops   = hops;
			this.grains = grains;
			this.IBU    = IBU;
			this.ABV    = ABV;
			
			// Push our new beer object into our list of beers
			beerList.push(this)
		}

		new Beer('Bear Beer', 'Stout', ['Cascade', 'Cascade'], ['Wheaties'], 35, 9.8)
		new Beer('Unicorn Tears', 'Pale Ale', ['Magic', 'Horse'], ['Corn', 'Ivory'], 22, 4.7)

		return {
			Beer     : Beer,
			beerList : beerList
		}
	})

angular.module('radApp')
	.controller('radTroller', ['$scope', 'radFactory', '$timeout', function($scope, radFactory, $timeout){
		// console.log('so rad brah!')
		
		new radFactory.Beer('Keebler Brew', 'Elven Ale', ['Green Nugget', 'Chocolate Chip'], ['Magnum'], 12, 12.3)
		console.log('After Keebler', radFactory)
		// console.log(radFactory.beerList[0])

		$scope.beers = radFactory.beerList

		$scope.beers.forEach(function(beer, index){
			$timeout(function(){
				beer.showBeer = true
			}, 1000 * (index + 1))
		})

		$scope.editHops = function(beerIndex){
			console.log(beerIndex)
			$scope.beers[beerIndex].showHopInputs = !$scope.beers[beerIndex].showHopInputs
		}

		$scope.whatHop = function(hop){
			console.log(hop)
			// Won't work since hop is a string - passed by VALUE not REFERENCE
			hop = '!!!!'
		}

		$scope.deleteHop = function(beerIndex, hopIndex, numberToRemove){
			// console.log(numberToRemove)
			// $scope.beers[beerIndex].hops[hopIndex]
			$scope.beers[beerIndex].hops.splice(hopIndex, numberToRemove)
		}

	// var myVar = 10

	// function(){
	// 	var myVar = 20

	// 	function(){
	// 		var myVar = 30
	// 		console.log(myVar)
	// 	}
	// 	console.log(myVar)
	// }
	// console.log(myVar)




	}]);